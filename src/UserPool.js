import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
  UserPoolId: "us-east-1_X4cZfd6Ch",
  ClientId: "sumklqjubpe586cvu0eranr6u",
};
const userPool = new CognitoUserPool(poolData);

export default userPool;