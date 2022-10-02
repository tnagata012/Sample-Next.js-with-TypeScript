import Link from 'next/link'
import React from 'react'
import App from './App'

const Components = () => {
  return (
    <div>
      <Link href='/'>Go to Index</Link>
      <br />
      <br />

      <button>
        <Link href='./Hello'>Hello</Link>
      </button>
      <br />
      <button>
        <Link href='./Message'>Message</Link>
      </button>
      <br />
      <button>
        <Link href='./Name'>Name</Link>
      </button>
      <br />
      <button>
        <Link href='./ContainerSample'>ContainerSample</Link>
      </button>
      <br />

      <p title='state'>
        state hooks
        <br />
        <button>
          <Link
            href={{
              pathname: './hooks/UseStateSample',
              query: { initialValue: 0 },
            }}
          >
            UseStateSample
          </Link>
        </button>
        <br />
        <button>
          <Link
            href={{
              pathname: './hooks/UseReducerSample',
              query: { initialValue: 0 },
            }}
          >
            UseReducerSample
          </Link>
        </button>
      </p>

      <p title='memo'>
        memo hooks
        <br />
        <button>
          <Link href='./MemoSample1'>MemoSample1</Link>
        </button>
        <br />
        <button>
          <Link href='./MemoSample2'>MemoSample2</Link>
        </button>
        <br />
        <button>
          <Link href='./hooks/UseCallbackSample'>UseCallbackSample</Link>
        </button>
        <br />
        <button>
          <Link href='./hooks/UseMemoSample'>UseMemoSample</Link>
        </button>
      </p>

      <p title='side effect'>
        side effect
        <br />
        <button>
          <Link href='./hooks/UseEffectSample'>UseEffectSample</Link>
        </button>
        <br />
        <button>
          <Link href='./hooks/UseLayoutEffectSample'>UseLayoutEffectSample</Link>
        </button>
      </p>

      <p title='context'>
        context
        <br />
        <button>
          <Link href='./ContextSample'>ContextSample</Link>
          <br />
        </button>
        <br />
        <button>
          <Link href='./hooks/UseContextSample'>UseContextSample</Link>
        </button>
      </p>

      <p title='ref'>
        ref
        <br />
        <button>
          <Link href='./hooks/UseRefSample'>UseRefSample</Link>
        </button>
        <br />
        <button>
          <Link href='./hooks/UseImperativeHandleSample'>UseImperativeHandleSample</Link>
        </button>
      </p>

      <p title='custom'>
        custom
        <br />
        <button>
          <Link href='./hooks/UseCustomHookSample'>UseCustomHookSample</Link>
        </button>
      </p>

      <App />
    </div>
  )
}

export default Components
