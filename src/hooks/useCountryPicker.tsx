import { CountryPickerModal } from "@/components/modals/CountryPicker.modal"
import { CountryPicker } from "@/components/molecules/CountryPicker"
import { SelectCountry } from "@/type/structs";
import { useState } from "react";

export const useCountryPicker = () => {
      const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
      const [selectedItem, setSelectedItem] = useState<SelectCountry>({
            flag: "https://cdn.studentbeans.com/static/web/assets/images/flags/ng.svg",
            country: "Nigeria"
      });

      return {
            CountryPicker: () => (
                  <CountryPicker 
                        currentCountry={selectedItem} 
                        isOpen={isModalOpen}
                        onOpen={() => {
                              setIsModalOpen(!isModalOpen)
                        }}
                  />
            ),
            CountryPickerModal: () => (
                  <CountryPickerModal 
                        isOpen={isModalOpen}
                        currentCountry={selectedItem}
                        onSelect={setSelectedItem}
                        onClose={setIsModalOpen}
                  />
            )
      }
}