export interface Order {
    id: number;
    productTitle: string;
    productLink: string;
    price: number;
    date: string;
  }
  
  export interface Customer {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    orders: Order[];
  }