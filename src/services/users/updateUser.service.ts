import {
  IUserResponse,
  IUserUpdateRequest,
} from "../../interfaces/user.interfaces";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { userResponseSerializer } from "../../serializers/user.serializers";
import { AppError } from "../../errors/AppError";

const updateUserService = async (
  userData: IUserUpdateRequest,
  userId: string
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const foundUserByParam = await userRepository.findOneBy({ id: userId });

  if (!foundUserByParam) {
    throw new AppError("User not found!", 404);
  }

  const { fullName, email, password, telephone } = userData;

  if (!fullName && !email && !password && !telephone) {
    throw new AppError(
      "You don't have authorization to change this fields",
      403
    );
  }

  const updateUser = userRepository.create({
    ...foundUserByParam,
    fullName: fullName || foundUserByParam.fullName,
    email: email || foundUserByParam.email,
    password: password || foundUserByParam.password,
    telephone: telephone || foundUserByParam.telephone,
  });

  await userRepository.save(updateUser);

  const userResponse = await userResponseSerializer.validate(updateUser, {
    stripUnknown: true,
  });

  return userResponse;
};

export default updateUserService;
