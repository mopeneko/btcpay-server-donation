import type { MetaFunction } from '@remix-run/cloudflare';
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: 'もぺどねーと' },
    { name: 'description', content: 'もぺにBitcoinで投げ銭できるサイト' },
  ];
};

export default function Index() {
  const [amount, setAmount] = useState(100);

  const onClick = (value: number) => {
    setAmount(value);
  };
  11;
  return (
    <div className='prune flex flex-col items-center justify-center h-screen'>
      <h1>もぺに投げ銭する</h1>
      <form
        method='POST'
        action='https://btcpaysrv.lem0n.cc/api/v1/invoices'
        className='pt-4'
      >
        <input
          type='hidden'
          name='storeId'
          value='FDR74aQBydMgPTTeZcqDudxsui4Xqj3iWkmiijjnNqox'
        />
        <input type='hidden' name='currency' value='JPY' />
        <div>
          <input
            type='number'
            name='price'
            className='input input-border input-primary w-full'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className='flex gap-4 pt-4'>
          <button type='button' className='btn' onClick={(e) => onClick(100)}>
            100円
          </button>
          <button type='button' className='btn' onClick={(e) => onClick(300)}>
            300円
          </button>
          <button type='button' className='btn' onClick={(e) => onClick(500)}>
            500円
          </button>
          <button type='button' className='btn' onClick={(e) => onClick(1000)}>
            1000円
          </button>
        </div>
        <div className='flex justify-center pt-6'>
          <button type='submit' className='btn'>
            投げ銭をする
          </button>
        </div>
      </form>
    </div>
  );
}
