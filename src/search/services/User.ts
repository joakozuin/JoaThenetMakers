const DEFAULT_IMAGE = `https://storage.googleapis.com/data-netmakers/contenidoWeb%20NO%20BORRAR/perfil_avatar.svg`;

const MAX_DESCRIPTION = 179;
const MAX_SPECIALITY = 60;
const MAX_TOOLS = 100;

export const fetchUsers = async (param: any): Promise<any> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/search`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ param, search: "search", type: "all" }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  const users = result.partners.filter(
    ({ imagen_perfil, habilidades, descripcion, herramientas, pais }: any) =>
      habilidades !== undefined &&
      descripcion !== undefined &&
      herramientas !== undefined &&
      pais !== undefined &&
      imagen_perfil !== DEFAULT_IMAGE
  );

  //Abstraer futuramente: limitacion de caracteres / descripcion, habilidades, herramientas, nombre.
  users.map((user: any) => {
    if (user.nombre.split(" ").length >= 2) {
      user.nombre = user.nombre.split(" ")[0];
    }

    if (user.descripcion.length >= MAX_DESCRIPTION) {
      const substr = user.descripcion.substring(0, MAX_DESCRIPTION) + "...";

      user.descripcion = substr;
    }

    if (user.habilidades.length >= MAX_SPECIALITY) {
      const substr = user.habilidades.substring(0, MAX_SPECIALITY) + "...";

      user.habilidades = substr;
    }

    if (user.herramientas.length >= MAX_TOOLS) {
      const substr = user.herramientas.substring(0, MAX_TOOLS) + "...";

      user.herramientas = substr;
    }
  });

  return users;
};

export const getAllUsers = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/getLatestUsers?type=Partner&Block=0`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();

  const users = result.users.filter(
    ({ imagen_perfil, habilidades, descripcion, herramientas, pais }: any) =>
      habilidades !== undefined &&
      descripcion !== undefined &&
      herramientas !== undefined &&
      pais !== undefined &&
      imagen_perfil !== DEFAULT_IMAGE
  );

  //Abstraer futuramente: limitacion de caracteres / descripcion, habilidades, herramientas, nombre.
  users.map((user: any) => {
    if (user.nombre.split(" ").length >= 2) {
      user.nombre = user.nombre.split(" ")[0];
    }

    if (user.descripcion.length >= MAX_DESCRIPTION) {
      const substr = user.descripcion.substring(0, MAX_DESCRIPTION) + "...";

      user.descripcion = substr;
    }

    if (user.habilidades.length >= MAX_SPECIALITY) {
      const substr = user.habilidades.substring(0, MAX_SPECIALITY) + "...";

      user.habilidades = substr;
    }

    if (user.herramientas.length >= MAX_TOOLS) {
      const substr = user.herramientas.substring(0, MAX_TOOLS) + "...";

      user.herramientas = substr;
    }
  });

  return users;
};
