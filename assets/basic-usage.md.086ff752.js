import{_ as s,c as n,o as a,a as t}from"./app.93c9021b.js";const g='{"title":"Basic usage","description":"","frontmatter":{},"headers":[{"level":3,"title":"store/index.ts","slug":"store-index-ts"},{"level":3,"title":"store/test.ts","slug":"store-test-ts"},{"level":3,"title":"store/user.ts","slug":"store-user-ts"},{"level":3,"title":"helper/pinia-auto-refs.ts","slug":"helper-pinia-auto-refs-ts"},{"level":3,"title":"useStore Demo","slug":"usestore-demo"}],"relativePath":"basic-usage.md"}',p={},o=t(`<h1 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h1><h3 id="store-index-ts" tabindex="-1">store/index.ts <a class="header-anchor" href="#store-index-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre></div><h3 id="store-test-ts" tabindex="-1">store/test.ts <a class="header-anchor" href="#store-test-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;allen&#39;</span><span class="token punctuation">,</span>
      token<span class="token operator">:</span> <span class="token string">&#39;token...&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">fullName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> name <span class="token operator">+</span> <span class="token string">&#39;_ttk&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="store-user-ts" tabindex="-1">store/user.ts <a class="header-anchor" href="#store-user-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      userInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        token<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="helper-pinia-auto-refs-ts" tabindex="-1">helper/pinia-auto-refs.ts <a class="header-anchor" href="#helper-pinia-auto-refs-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token comment">// &quot;https://github.com/Allen-1998/pinia-auto-refs&quot;</span>
<span class="token keyword">import</span> testStore <span class="token keyword">from</span> <span class="token string">&#39;@/store/test&#39;</span>
<span class="token keyword">import</span> userStore <span class="token keyword">from</span> <span class="token string">&#39;@/store/user&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ToRef<span class="token punctuation">,</span> StoreToRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">StoreToRefs<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">K</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Function</span></span> <span class="token operator">?</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span> <span class="token operator">:</span> ToRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">PickOne<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> storeExports <span class="token operator">=</span> <span class="token punctuation">{</span>
  test<span class="token operator">:</span> testStore<span class="token punctuation">,</span>
  user<span class="token operator">:</span> userStore<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useStore</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token keyword">typeof</span> storeExports<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>storeName<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> storeExports<span class="token punctuation">[</span>storeName<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> storeRefs <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>store<span class="token punctuation">,</span> <span class="token operator">...</span>storeRefs <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> StoreToRefs<span class="token operator">&lt;</span>
    ReturnType<span class="token operator">&lt;</span>PickOne<span class="token operator">&lt;</span><span class="token keyword">typeof</span> storeExports<span class="token punctuation">,</span> <span class="token constant">T</span><span class="token operator">&gt;&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="usestore-demo" tabindex="-1">useStore Demo <a class="header-anchor" href="#usestore-demo" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> token<span class="token punctuation">,</span> fullName<span class="token punctuation">,</span> updateName <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// name.value</span>
<span class="token comment">// updateName()</span>
</code></pre></div>`,11),e=[o];function c(l,r,k,u,i,d){return a(),n("div",null,e)}var h=s(p,[["render",c]]);export{g as __pageData,h as default};
