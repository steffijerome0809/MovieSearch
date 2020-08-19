// Get the api response

const getData = async (url) => {
  const result = {
    data: {},
    statusCode: 0,
  };

  // Introducing the try block of code

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result.data = await response.json();
    result.statusCode = 200;
  } catch (error) {
    console.error('An error occured :', error);
    result.statusCode = 500;
    return result;
  }
};
