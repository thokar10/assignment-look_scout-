import { Request, Response } from "express";
import validator from "validator";
import userModel from "../models/userModel";

const signUpUser = async (req: Request, res: Response) => {
  console.log(req.body);

  const { firstName, emailAddress, phoneNumber, message } = req.body;

  try {
    if (!firstName) throw "first name is required";
    if (!emailAddress) throw "email is required";
    const checkEmailFormat = validator.isEmail(emailAddress.toString());
    if (!checkEmailFormat) throw "email format is invalid";

    if (!phoneNumber) throw "phone number is required";
    const PhoneNumberValidation = validator.isInt(phoneNumber.toString());
    if (!PhoneNumberValidation) throw "phone number should be in number";

    const checkExistedUser = await userModel.findOne({
      phoneNumber,
    });

    if (checkExistedUser)
      throw "user is already existed with this phone number";

    const registerUser = await userModel.create({
      firstName,
      emailAddress,
      phoneNumber,
      message,
    });

    if (!registerUser) throw "unable to create in model";

    res.status(200).json({
      status: "good",
      message: " register successfully",
    });
  } catch (error) {
    if (error) {
      if (typeof error == "string") {
        res.status(400).json({
          status: "bad",
          errorMessage: error,
        });
      } else {
        res.status(400).json({
          message: "something wrong",
          reason: error,
        });
      }
    }
  }
};
export default signUpUser;
