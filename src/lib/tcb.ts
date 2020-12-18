import cloudbase from '@cloudbase/js-sdk';
import { config } from '../config';

export const app = cloudbase.init({
  env: config.envId!,
});
var auth = app.auth({ persistence: "local" });
async function login() {
  await auth.anonymousAuthProvider().signIn().then(loginState => {
  });
}
login();