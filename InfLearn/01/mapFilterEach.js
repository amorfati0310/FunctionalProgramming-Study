var users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "AB", age: 30 },
  { id: 3, name: "CD", age: 31 },
  { id: 4, name: "EF", age: 18 },
  { id: 5, name: "GH", age: 27 },
  { id: 6, name: "IJ", age: 28 },
  { id: 7, name: "KL", age: 22 },
  { id: 8, name: "MN", age: 23 }
];

function _each(list, iter) {
  for (let item of list) {
    iter(item);
  }
}

var temp_users = [];
for (let user of users) {
  if (user.age >= 30) temp_users.push(user);
}

var temp_users = [];
for (let user of users) {
  if (user.age < 30) temp_users.push(user);
}

//조건부만 다르고 대체로 같다.

function _filter(list, predicate) {
  var new_list = [];
  _each(list, function(val) {
    if (predicate(val)) new_list.push(val);
  });
  return new_list;
}

_filter(users, user => user.age >= 30);
_filter(users, user => user.age < 30);

function _map(list, mapper) {
  var new_list = [];
  _each(list, function(val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

console.log(_map(_filter(users, user => user.age >= 30), user => user.name));

// 미리 정의되어 있지 않고 ,실행시점에 함수에 위임시킴 :D
// 고로 여러가지 형태에 모두 쓰일 수 있음
