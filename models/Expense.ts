import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

class Expense {
  private _id: string;
  private _description: string;
  private _amount: number;
  private _date: Date;

  constructor(amount: number, description?: string, date?: Date) {
    this._id = uuid();
    this._amount = amount;
    this._description = description || "";
    this._date = date || new Date();
  }

  public get id(): string {
    return this._id;
  }

  public get amount(): number {
    return this._amount;
  }

  public set amount(amount: number) {
    this._amount = amount;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get date(): Date {
    return this._date;
  }

  public set date(date: Date) {
    this._date = date;
  }

  public toString(): string {
    return `Expense [id=${this._id}, description=${
      this._description
    }, amount=${this._amount.toFixed(2)}, date=${this._date.toISOString()}]`;
  }
}

export default Expense;
