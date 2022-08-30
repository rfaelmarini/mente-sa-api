import { EmailValidatorAdapter } from '../../presentation/utils/email-validator-adapter'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter'
import { AccountMongodbRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const emailValidator = new EmailValidatorAdapter()
  const encrypter = new BcryptAdapter(salt)
  const addAccountRepository = new AccountMongodbRepository()
  const addAccount = new DbAddAccount(encrypter, addAccountRepository)
  return new SignUpController(emailValidator, addAccount)
}
