import { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { makePortal } from "../Portal";
import { MockSelectCountry } from "@/mocks/select-country";
import Image from "next/image";
import clsx from "clsx";
import { SelectCountry } from "@/type/structs";

export const ModalContent = makePortal("country-picker-modal");
export const ModalRoot:FC<PropsWithChildren> = ({ children }) => {
      return (
            <div className="absolute mt-4 z-20 bg-white border rounded-lg p-8">
                  <ModalContent.Outlet>
                        <h2 className="mb-4 text-2xl text-black-100 font-[600]">Select your country</h2>
                        { children }
                  </ModalContent.Outlet>
            </div>
      )
}

interface Props {
      isOpen?: boolean;
      onSelect: Dispatch<SetStateAction<SelectCountry>>;
      onClose: Dispatch<SetStateAction<boolean>>
      currentCountry: SelectCountry
}

export const CountryPickerModal: FC<Props> = ({ isOpen, onSelect, onClose, currentCountry}) => {
      if(!isOpen) return null;
       return (
            <ModalRoot>
                  <ModalContent.Slot>
                        <div className="w-full max-w-[400px] grid grid-cols-2 gap-2">
                              {
                              MockSelectCountry.map((item, indx) => {
                                    return (
                                          <div 
                                                key={indx}
                                                className={clsx("hover:bg-grey-100 rounded-lg hover:cursor-pointer flex flex-1 justify-start space-x-2 px-4 py-4  transition-color duration-300 ease-in", {
                                                      "bg-grey-100" : item.country === currentCountry.country
                                                })}
                                                onClick={() => {
                                                      onSelect(item)
                                                      onClose(false)
                                                }}
                                          >
                                                <div className="w-[30px] h-[20px] relative">
                                                      <Image 
                                                            src={item.flag}
                                                            alt="flag"
                                                            fill
                                                            className="object-cover h-[100%] w-[100%] rounded-sm"
                                                      />
                                                </div>
                                                <p className="text-black-100 text-md">{item.country}</p>
                                          </div>
                                    );
                              })
                              }
                        </div>
                  </ModalContent.Slot>
            </ModalRoot>
       )
}