import { createContext } from "react";
import type { Product } from "../types";

export const CartContext = createContext<Product[] | undefined>(undefined);
