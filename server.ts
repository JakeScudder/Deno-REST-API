import { Application, Router } from "https://deno.land/x/oak/mod.ts"; // @ts-ignore
import router from "./routes.ts"; // @ts-ignore
const port = Deno.env.get("PORT") || 7000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);

await app.listen({ port: +port });
