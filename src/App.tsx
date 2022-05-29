import { Component, createEffect, createSignal, For, Index } from 'solid-js';
import colorsAll from './assets/colors.json'
import Fuse from 'fuse.js'
const App: Component = () => {
  const fuse = new Fuse(colorsAll, { keys: ['name'] })
  const [colors, setColors] = createSignal(colorsAll);
  const [count, setCount] = createSignal(colorsAll.length)
  createEffect(() => {
    const results = fuse.search(search());
    if (results.length === 0) setColors(colorsAll)
    else setColors(results.map(r => r.item))
  });
  createEffect(() => setCount(colors().length))
  const [search, setSearch] = createSignal('');
  console.log({ colors: colors() })
  return (
    <div class="bg-gray-300">
      <div class='px-2'>
        <p class="text-4xl text-center py-5">
          Color Names ({count()})
        </p>
        <div class='grid grid-cols-2 gap-2 mb-2'>
          <input class="w-full p-2 col-span-2" autofocus placeholder='Red, Yellow, Cobalt ...' value={search()}
            onInput={(e) => setSearch(e.currentTarget.value)} />
          <button class="bg-blue-400 p-2" onClick={() => setColors(current => [...current].sort(() => Math.random() - .5))}>Randomize</button>
          <button class="bg-blue-400 p-2" onClick={() => setSearch('')}>Reset</button>
        </div>
        <hr class="broder border-black  my-3 w-full" />
        <div class="grid grid-cols-2 gap-2">
          <Index each={colors()} >
            {color =>
              <div class="border border-black">
                <div class="text-center">{color().name}</div>
                <div style={{ "background-color": color().value }} class="h-10"></div>
              </div>}
          </Index>
        </div>
      </div >
    </div >
  );
};

export default App;
