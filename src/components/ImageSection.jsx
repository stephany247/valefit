function ImageSection({ src, alt }) {
  return (
    <section>
      <img
        src={src}
        alt={alt}
        className="max-h-screen h-svh w-full object-[60%_15%] md:object-center object-cover md:object-fit"
      />
    </section>
  );
}

export default ImageSection;
