import { Request, Response } from 'express'
import userService from './user.service'

const createdUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    })
  } catch (err) {
    console.log('controller problem', err)
    res.status(400).json({
      success: false,
      message: 'Failed To Create User',
    })
  }
}

export default {
  createdUser,
}
