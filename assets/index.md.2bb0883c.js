import{_ as n,c as s,o as a,a as t}from"./app.93c9021b.js";const f='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Setup","slug":"setup"},{"level":2,"title":"Config Options","slug":"config-options"}],"relativePath":"index.md"}',p={},o=t(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><p><code>npm i pinia-auto-refs</code></p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
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
      dts<span class="token operator">:</span> <span class="token string">&#39;src/auto-imports.d.ts&#39;</span><span class="token punctuation">,</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;@/helper/pinia-auto-refs&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;useStore&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// !important</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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
</code></pre></div>`,7),e=[o];function c(i,l,u,r,k,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{f as __pageData,h as default};