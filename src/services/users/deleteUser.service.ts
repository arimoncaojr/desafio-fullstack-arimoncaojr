import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (userId: string): Promise<object> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("Client don't exists!", 404);
  }

  await userRepository.remove(user);

  return {};
};

export default deleteUserService;
