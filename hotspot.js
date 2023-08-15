exports.hotspot = function hotspot() {
  return `
  <style>
    code.language-tsx {
      position: relative;      
    }

    ol.hotspot-legend {
      counter-reset:li;
      margin: 1rem 1rem 2rem 1rem;
      padding-left:0;
    }

    ol.hotspot-legend > li {
      position: relative;
      padding: 0.5 1rem;
      list-style: none;
    }

    ol.hotspot-legend > li:before {
      content:counter(li); /* Use the counter as content */
      counter-increment:li; /* Increment the counter by 1 */

      display: inline-block;
      text-align: center;
      line-height: 0.95rem;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      color: white;
      background-color: black;
      font-size: 0.7rem;
      margin-top: -0.5rem;
    }

    ol.hotspot-legend > li code {
      margin-left: 0.5rem;
    }
    
    .hotspot-number {
      position: absolute;
      display: inline-block;
      text-align: center;
      line-height: 0.95rem;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      color: white;
      background-color: black;
      font-size: 0.7rem;
      margin-top: -0.5rem;
    }
    
    .token.hotspot {
      outline: dashed 1px gray;
      padding: 0 0.125rem;
      border-radius: 0.125rem;
      cursor: pointer;
    }

    .token.hotspot:hover,
    .token.hotspot:focus {
      outline-color: black;
    }

    .token:focus:after,
    .token:hover:after {
      position: absolute;
      margin-top: 1rem;
      display: inline-block;
      height: 1.5rem;
      border: solid 1px black;
      background-color: white;
      border-radius: 0.5rem;
      padding: 0.5rem 0.75rem;
      box-shadow: silver 0 0 1rem;
    }

    .token.variable.Counter:focus:after,
    .token.variable.Counter:hover:after {
      content: 'counter.tsx/Counter';
    }

    .token.count:focus:after,
    .token.count:hover:after {
      content: 'counter.tsx/Counter/count';
    }

    .token.function.useState:focus:after,
    .token.function.useState:hover:after {
      content: 'counter.tsx/Counter/useState()@1';
    }

    .token.function.useEffect:focus:after,
    .token.function.useEffect:hover:after {
      content: 'counter.tsx/Counter/useEffect()@1';
    }

    .token.variable.interval:focus:after,
    .token.variable.interval:hover:after {
      content: 'counter.tsx/Counter/useEffect()@1/interval';
    }
  </style>
    
  <p>Click or tap on any part of this code to see a code selector that targets it.</p>

    <pre class="language-tsx" tabindex="0"><code class="language-tsx"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token hotspot variable Counter" tabindex="0">Counter</span><b class="hotspot-number">1</b><span class="token operator">:</span> <span class="token function-variable function">VFC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token hotspot variable count" tabindex="0">count</span><b class="hotspot-number">2</b><span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token hotspot function useState" tabindex="0">useState</span><b class="hotspot-number">3</b><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>overLimit<span class="token punctuation">,</span> setOverLimit<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token hotspot function useEffect" tabindex="0">useEffect</span><b class="hotspot-number">4</b><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token hotspot variable interval" tabindex="0">interval</span><b class="hotspot-number">5</b> <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setCount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setOverLimit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>

<ol class="hotspot-legend">
  <li><code>counter.tsx/Counter</code></li>
  <li><code>counter.tsx/Counter/count</code></li>
  <li><code>counter.tsx/Counter/useState()@1</code></li>
  <li><code>counter.tsx/Counter/useEffect()@1</code></li>
  <li><code>counter.tsx/Counter/useEffect()@1/interval</code></li>
</ol>
  `;
};
