echo enter title of the new post
read title

deno task lume new post ${title// /_}
