const API_URL = 'https://localhost:7241/api/governmententities';

export async function fetchEntities() {
  const response = await fetch(`${API_URL}/all`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
  });
  return await response.json();
}

export async function saveEntity(entity) {
  const method = entity.id ? 'PUT' : 'POST';
  const endpoint = entity.id ? 'update' : 'add';
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(entity)
  });
  return response.ok;
}

export async function deleteEntity(id) {
  const response = await fetch(`${API_URL}/delete/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
  });
  return response.ok;
}
