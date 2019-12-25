import { container } from "tsyringe";
import { TokenClient, UserClient } from "./discord";

export default container
  .register("TokenClient", { useValue: new TokenClient() })
  .register("UserClient", { useValue: new UserClient() });
