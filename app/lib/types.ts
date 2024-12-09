// app/lib/types.ts

import { z } from 'zod';

// Define a Zod schema for menu item
export const MenuItemSchema = z.object({
  menuId: z.string().min(1, { message: "Menu ID is required" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
});

// Define a Zod schema for the transaction data
export const TransactionDataSchema = z.object({
  nocustomer: z.string().min(1, { message: "Customer is required" }),
  menu_items: z.array(MenuItemSchema).min(1, { message: "At least one menu item is required" }),
  totalPrice: z.number().min(1, { message: "Total price must be greater than 0" }),
  status_transaksi: z.enum(['Pending', 'Paid', 'Completed'], { message: "Invalid transaction status" }),
  payment_method: z.enum(['Cash', 'Credit Card', 'E-Wallet'], { message: "Invalid payment method" }),
  description: z.string().optional(),
});

export type TransactionData = z.infer<typeof TransactionDataSchema>;
