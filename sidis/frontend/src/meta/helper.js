export const get_json_data = (response, find) => {
  if(find)
  return {
    json: response.data.records[find],
  };
  else 
  return {
    json: response.data.records
  };
};
