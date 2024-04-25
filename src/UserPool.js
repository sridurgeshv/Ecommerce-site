import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
  UserPoolId: "us-east-1_X4cZfd6Ch",
  ClientId: "sumklqjubpe586cvu0eranr6u",
};
export default new CognitoUserPool(poolData);