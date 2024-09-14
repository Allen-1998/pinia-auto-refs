import{_ as s,c as a,a as t,o as p}from"./app.9ca3f453.js";const d='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Setup","slug":"setup"},{"level":2,"title":"Config Options","slug":"config-options"},{"level":2,"title":"Attentions","slug":"attentions"}],"relativePath":"index.md"}',o={};function e(c,n,i,l,r,u){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><p><code>npm i pinia-auto-refs</code></p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> PiniaAutoRefs <span class="token keyword">from</span> <span class="token string">&#39;pinia-auto-refs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;@/helper/pinia-auto-refs&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;useStore&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// !important</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">PiniaAutoRefs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="config-options" tabindex="-1">Config Options <a class="header-anchor" href="#config-options" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  storeDir<span class="token operator">:</span> <span class="token builtin">string</span>
  excludes<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  outputFile<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  storeDir<span class="token operator">:</span> <span class="token string">&#39;src/store&#39;</span><span class="token punctuation">,</span>
  excludes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  outputFile<span class="token operator">:</span> <span class="token string">&#39;src/helper/pinia-auto-refs.ts&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="attentions" tabindex="-1">Attentions <a class="header-anchor" href="#attentions" aria-hidden="true">#</a></h2><p>You need to switch the store export mode to <code>export default</code>, because we can&#39;t get what you exported directly when we import automatically. Using <code>export default</code> makes it much easier.</p><div class="language-ts"><pre><code><span class="token comment">// store/test.ts</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,10)]))}var g=s(o,[["render",e]]);export{d as __pageData,g as default};
