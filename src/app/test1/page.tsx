'use client';
import React, { useState } from 'react';
import styles from './style.module.css';

export default function Test1() {
  const [arr, setArr] = useState<Array<any>>([]);

    function checkNumber(number: number): boolean {
      const strNumber = number.toString().padStart(3, '0');
      const conditions = [
        {
          code: '246',
          correctDigits: 1,
          correctPositions: 1
        },
        {
          code: '692',
          correctDigits: 2,
          correctPositions: 0
        },
        {
          code: '174',
          correctDigits: 0,
          correctPositions: 0
        },
        {
          code: '419',
          correctDigits: 1,
          correctPositions: 0
        }
      ];

      return conditions.every(({ code, correctDigits, correctPositions }) => {
        let digits = 0;
        let positions = 0;

        for (let i = 0; i < 3; i++) {
          if (strNumber[i] === code[i]) {
            positions++;
          }
          if (code.includes(strNumber[i])) {
            digits++;
          }
        }

        return digits === correctDigits && positions === correctPositions;
      });
    }

    function findNumbers(): number[] {
      const result: number[] = [];

      for (let i = 0; i < 1000; i++) {
        if (checkNumber(i)) {
          result.push(i);
        }
      }

      setArr(result);

      return result;
    }

  return (
    <main className="flex min-h-screen items-center p-24">
      <button className={styles.btn} onClick={() => console.info(findNumbers())}>点击查看结果</button>
      {' '}
      <p>{arr.toString()}</p>
    </main>
  );
}