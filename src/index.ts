import { Elysia, t } from "elysia"


const app = new Elysia().prefix("all", "/v1").onError(({ code, path }) => {
  if (code == "NOT_FOUND") {
    return { error: 404, message: `path:'${path}' not found 😥` }
  }
})



app.listen(3000, () => console.log(`FetchTask runing on http://localhost:3000`))