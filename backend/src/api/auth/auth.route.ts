import { Router } from 'express';
import * as yup from 'yup';
import bcrypt from 'bcrypt';
import {sign} from '../../lib/jwt';

const router = Router();

// const schema = yup.object({
//   username: yup.string().trim().min(2).max(20).required(),
//   email: yup.string().trim().email().required(),
//   password: yup
//     .string()
//     .min(8)
//     .max(200)
//     .matches(/[0-9]/,'password must contain one number')
//     .matches(/[A-Z]/,'password must contain an uppercase letter')
//     .matches(/[a-z]/,'password must contain a lowercase letter')
//     .matches(/[*.!@$%^&(){}:;<>,.?~_+-=]/, 'password must contain a special character')
//     .required()
// })

// router.post('/signup', async (req, res, next) => {

//   const {username, email, password} = req.body;

//   try {
//     const createdUser = {
//       username,
//       email,
//       password
//     };
//     // Validate user input. Throws error if validation fails
//     await schema.validate(createdUser, {
//       abortEarly: false
//     });

//     // // Check for existing user
//     // const existingUser = await User.query().where({email}).first();
//     // if(existingUser){
//     //   const error = new Error('Email already in use');
//     //   res.status(409);
//     //   throw error;
//     // }

//     // Insert User to DB and hash password

//     // const hashedPassword = await bcrypt.hash(password,10);
//     // const insertedUser: any = await User.query().insert({
//     //   username,
//     //   email,
//     //   password: hashedPassword,
//     // });

//     // // Sign payload with jwt
//     // const payload = {
//     //   id: insertedUser.id,
//     //   username,
//     //   email,
//     // };

// //     // Sign payload with secret key that only server knows
// //     const token = await sign(payload);
// //     res.json({
// //       user: payload,
// //       token
// //     })
// //   } catch (error) {
// //     next(error);
// //   }
// // });

// router.post('/signin', async (req, res, next) => {

//   const { email, password} = req.body;

//   try {
//     const userInput = {
//       username: 'testuser',
//       email,
//       password
//     };
//     // Validate user input. Throws error if validation fails
//     await schema.validate(userInput, {
//       abortEarly: false
//     });

//     // Check for existing user
//     const existingUser: any = await User.query().where({email}).first();
//     if(!existingUser){
//       const error = new Error('Invalid Login');
//       res.status(403);
//       throw error;
//     }

//     // Validate Password

    
//     const validPassword = await bcrypt.compare(password, existingUser.password)
//     if (!validPassword) {
//       const error = new Error("Invalid Login");
//       res.status(403);
//       throw error;
//     }

//     // Sign payload with jwt
//     const payload = {
//       id: existingUser.id,
//       username: existingUser.user,
//     };

//     // Sign payload with secret key that only server knows
//     const token = await sign(payload);
//     res.json({
//       user: payload,
//       token,
//       message: "User Sign in"
//     })
//   } catch (error) {
//     next(error);
//   }
// });

export default router;

