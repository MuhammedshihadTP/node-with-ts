import Express from "express";
import { Module } from "module";
import { any } from "webidl-conversions";
import { userData } from "../model/user";

export const home = async (req: Express.Request, res: Express.Response) => {
  const users = await userData.find();
  console.log(users);
  res.status(200).json(users);
};
export const addUser = async (req: Express.Request, res: Express.Response) => {
  try {
    const data = req.body;
    const user = new userData(data);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req: Express.Request, res: Express.Response) => {
  try {
    const userId = req.params.id;
    const user = await userData.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: "user Not Founded" });
    console.log(error);
  }
};

export const updateUser = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const userId = req.params.id;
    const { email, name, phone } = req.body;
    const updatedData = await userData.findByIdAndUpdate(userId, {
      $set: {
        email,
        name,
        phone,
      },
    });

    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const userId = req.params.id;
    const deleteData = await userData.findByIdAndDelete(userId);
    res.status(204).json(deleteData);
  } catch (error) {
    console.log(error);
  }
};
