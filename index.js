function init()
{
    fetch("profiles/users.csv")
    .then(response => response.text())
    .then(function(text) 
    {
        console.log(text);
        return text;
    })
    .then(createProfileObjects)
    .then(render)
}

function createProfileObjects(data)
{
    let headers = [], profiles = [];
    data = data.split("\n");
    headers = data.shift()
    headers = headers.split(",");
    for(let line of data)
    {
        line = line.split(",");
        profiles.push(createProfile(headers, line));
    }
    return profiles;
}

function createProfile(headers, data)
{
    let profile = {};
    for(let i = 0; i < headers.length; ++i)
    {
        profile[headers[i]] = data[i];
    }
    return profile;
}

function render(profiles)
{
    let profilesContainerDiv = document.createElement("DIV");
    for(let profile of profiles)
    {
        let profileDiv = document.createElement("DIV");
        let profilePic = document.createElement("IMG");
        let profileName = document.createElement("DIV");
        let profileCar = document.createElement("DIV");
        let profileInsta = document.createElement("A");

        profilePic.src = profile["ImageFolderPath"];
        profilePic.class = "profilePicture"
        profileName.innerHTML = profile["Name"];
        profileCar.innerHTML = profile["Car"];
        profileInsta.href = "https://www.instagram.com/" + profile["instagram"];
        profileInsta.innerHTML = "@" + profile["instagram"];

        profileDiv.appendChild(profilePic);
        profileDiv.appendChild(profileName);
        profileDiv.appendChild(profileCar);
        profileDiv.appendChild(profileInsta);
        profilesContainerDiv.appendChild(profileDiv);
    }
    //profilesContainerDiv.class = "profilesContainer";
    document.getElementById("body").appendChild(profilesContainerDiv);
}