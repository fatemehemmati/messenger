
export async function getUser() {
           const response = await fetch(
             "http://localhost:1337/api/contacts/1?populate=*"
  );
  const user = await response.json();
    return {
      id: user.data.id,
      firstname: user.data.attributes.FirstName,
      username: `${user.data.attributes.FirstName} ${user.data.attributes.LastName}`,
      online: user.data.attributes.IsOnline,
      avatar: `http://localhost:1337${user.data.attributes.ProfileIcon.data.attributes.formats.large.url}`,
      field: "Senior Ui/Ux designer",
    };
  }
 
                



 
