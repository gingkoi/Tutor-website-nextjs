"use client";
import React, { useEffect, useRef, useState } from "react";

const CountUp = ({ end }: { end: any }) => {
  const [state, setState] = useState<any>(null);
  const ref = useRef(0);

  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setState(end);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, 10);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    return () => (isMounted = false);
  }, [end]);
  return <div>{state}</div>;
};

export default CountUp;
