import PropTypes from 'prop-types';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";

export function PopUp({ data }) {
  console.log(data);
  return (
    <Popover>
      <PopoverHandler>
        <Button className="bg-light-blue-900 shadow-transparent">{data.ref}</Button>
      </PopoverHandler>
      <PopoverContent className={`z-[999] w-[28rem] grid ${data.contenido?.titulo ? "grid-cols-2 w-[28rem]": "grid-cols-1 w-[18rem]"} overflow-hidden p-0 justify-items-center`}>
        <div className="p-4">
          <Typography color="blue-gray" className="mb-2 text-lg font-bold text-center">
            {data.contenido?.titulo || ""}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="mb-14 font-normal text-blue-gray-500 text-center my-auto"
          >
            {data.desc}
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  );
}

PopUp.propTypes = {
  data: PropTypes.shape({
    ref: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    contenido: PropTypes.shape({
      titulo: PropTypes.string,
    }),
  }).isRequired,
};
