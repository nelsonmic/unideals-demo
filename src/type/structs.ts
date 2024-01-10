export type SelectCountry = {
      flag: string,
      country: string
}

export type Discounts = {
      bannerImage: string;
      brandImage: string;
      brandName: string;
      discount: string;
      expiry?: string;
      cashBack?: string;
      tags: string[];
}

export type BlogPost = {
      image: string;
      title: string;
      date: string;
}

export type ProductListing = {
      image: string;
      product: string;
      price: string;
      prevPrice: string;
      discount: string;
      brand: {
            image: string;
            name: string
      }
}