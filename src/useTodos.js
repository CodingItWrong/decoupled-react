import {useState, useEffect} from 'react';
import axios from 'axios';
import Todos from './lib/todos';
import RestTodosClient from './lib/todos/client/rest';

const todos = new Todos(
  new RestTodosClient(axios.create({baseURL: 'http://localhost:3000'})),
);

export default function useTodos() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    todos.loadAll().then(() => {
      setRecords(todos.all);
    });
  }, []);

  return records;
}
