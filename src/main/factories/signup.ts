import { EmailValidatorAdapter } from '../../presentation/utils/email-validator-adapter'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongodbRepository } from '../../infra/db/mongodb/account-repository/account'
import { LogControllerDecorator } from '../decorators/log'
import { Controller } from '../../presentation/protocols'
import { LogMongoRepository } from '../..//infra/db/mongodb/log-repository/log'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const encrypter = new BcryptAdapter(salt)
  const addAccountRepository = new AccountMongodbRepository()
  const logMongoRepository = new LogMongoRepository()
  const addAccount = new DbAddAccount(encrypter, addAccountRepository)
  const signupController = new SignUpController(emailValidator, addAccount)
  return new LogControllerDecorator(signupController, logMongoRepository)
}
