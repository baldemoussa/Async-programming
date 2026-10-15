# Async Programming

## By [Mamadou Moussa Balde](https://www.linkedin.com/in/2mb/)

A Vite page. From this folder, `npm run dev` starts it. This run was Vite 8.2.1 at http://localhost:5173/. The tab title is **async-programming**. The only thing on the page is the heading "Async programming". `#app` stays empty. The page does not set a font or a background. In this browser the heading is Times New Roman, 32px, black. The shot is on white.

![Async programming](docs/screenshots/home.png)

`index.html` loads `src/main.ts`, `src/apiSimulator.ts`, and `src/api.ts`. The results are console lines. `src/closuresHigher-orderCallbacks.ts` is not loaded.

## The order

`handleOrder` tries a product with quantity 1 and price -10. That throws a `PaymentError`, so the console errors `Payment Error: Invalid product price`. The `finally` block then logs `Order processing completed.`

The simulator logs `Begin statement` and `End statement` right away. The three product lists arrive later:

- Product details, after 500ms: Product 1 at 100 and Product 2 at 200
- Related products, after 1000ms: Product 3 at 300 and Product 4 at 400
- Reviews, after 1500ms: rating 5 and rating 4 for product 1, and rating 3 for product 2

## JSONPlaceholder

`src/api.ts` calls `https://jsonplaceholder.typicode.com`. In this run the console order was:

`updatePartialPost` first logs the fields it will send, `{"title":"Partial New Post","userId":1}`.

`getPosts` logs `________________All posts getPosts________________` and 100 posts. The first is id 1, userId 1, title `sunt aut facere repellat provident occaecati excepturi optio reprehenderit`.

`getPost(1)` runs twice. Both logs are `________________A post getPost________________` and that same first post.

`createPost` logs `________________Create New posts createPost________________` and `{"id":101,"title":"New Post","body":"My new post","userId":1}`.

`deletePost(100)` logs `________________Delete posts deletePost --> Result true________________` and `{}`.

`updateFullPost` logs `________________Update Full posts updateFullPost________________` and `{"id":1,"title":"Full New Post","body":"Full My new post","userId":1}`.

`updatePartialPost` then logs `________________Update Partial posts updatePartialPost________________`. The title is `Partial New Post` and the body is still the original post body.
