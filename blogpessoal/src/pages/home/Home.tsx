function Home() {
  return (
    <>
      <main className="bg-indigo-900 flex justify-center">
        <section className="container grid grid-cols-2 text-white">

          <article className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className="text-5xl font-bold">
              Seja Bem Vinde!
            </h1>

            <p className="text-xl">
              Expresse aqui seus pensamentos e opiniões
            </p>

            <div className="flex justify-around gap-4">
              <button
                className="rounded border-2 border-white py-2 px-4 text-white hover:bg-white hover:text-indigo-900 transition"
              >
                Nova Postagem
              </button>
            </div>
          </article>

          <figure className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </figure>

        </section>
      </main>
    </>
  );
}

export default Home;