function init()
{
    fetch("profiles/users.csv")
    .then(function(response)
    {
        return response.text;
    })
    .then(createProfileObjects)
}

function createProfileObjects(data)
{
    console.log(data);
}