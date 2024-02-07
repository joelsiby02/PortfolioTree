"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words =` Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad rem dignissimos maiores quidem quasi impedit? Sed nostrum aliquam voluptatem iste ratione quod hic, qui rem, doloribus quasi, vel culpa doloremque nihil? Nam, non distinctio quaerat, quam dolor necessitatibus aspernatur eum modi earum voluptatem nisi repudiandae atque ipsum delectus placeat voluptatum. Earum quibusdam ipsum illo exercitationem, asperiores nemo accusantium rem accusamus, ad voluptatum ullam debitis temporibus voluptate odit quasi! Ut, voluptates velit voluptatum laborum commodi molestiae sed quae cum harum! Veniam consequuntur sapiente, nulla corrupti tempora illo aliquam sint molestiae.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
