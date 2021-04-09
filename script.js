import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '3s', target: 20 },
    // { duration: '1m30s', target: 10 },
    { duration: '2s', target: 2 },
  ],
};

export default function () {
  let res = http.get('https://syafarina.herokuapp.com');
  // let res = http.get('https://httpbin.org/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

