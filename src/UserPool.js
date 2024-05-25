import { CognitoUserPool } from "amazon-cognito-identity-js";
const poolData = {
  UserPoolId: "us-east-1_X4cZfd6Ch",
  ClientId: "sumklqjubpe586cvu0eranr6u",
};
const userPool = new CognitoUserPool(poolData);

const getUserProfile = () => {
  const cognitoUser = userPool.getCurrentUser();
  return new Promise((resolve, reject) => {
    if (cognitoUser) {
      cognitoUser.getSession((err, session) => {
        if (err) {
          reject(err);
        } else {
          cognitoUser.getUserAttributes((err, attributes) => {
            if (err) {
              reject(err);
            } else {
              const profile = {};
              attributes.forEach((attribute) => {
                profile[attribute.getName()] = attribute.getValue();
              });
              resolve(profile);
            }
          });
        }
      });
    } else {
      resolve(null);
    }
  });
};

export default userPool;
export { getUserProfile };