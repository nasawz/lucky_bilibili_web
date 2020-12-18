import React, { Suspense } from 'react';

const App = React.lazy(() => import('./app'));
export interface IRootProps {
}

export default function Root(props: IRootProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!window['__globalData']) {
      window['__globalData'] = new Map();
    }

    fetch('/cloudbaseenv.json')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(data => {
        window['__globalData'].cloudbaseenv = data;
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  });
  if (loading) {
    return null;
  }

  return (
    <Suspense fallback={<div />}>
      <App />
    </Suspense>
  );
}
