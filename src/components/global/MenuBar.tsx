import React, { useContext } from "react";
import { ViewContext } from "@/context/ViewContext";
import { IconCheck, IconLayoutGrid, IconList } from "@tabler/icons-react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}
const MenuBar: React.FC = () => {
	const { view, setView } = useContext(ViewContext);

	return (
		<div className="flex justify-end m-3">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
						{view === "gallery" && <IconLayoutGrid />}
						{view === "table" && <IconList />}
					</Menu.Button>
				</div>

				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							<Menu.Item>
								{({ active }) => (
									<button
										onClick={() => setView("gallery")}
										className={classNames(
											active ? "bg-gray-100 text-gray-900" : "text-gray-700",
											"block px-4 py-2 text-sm flex items-center w-full justify-between"
										)}
									>
										<div className="flex justify-start">
											<IconLayoutGrid /> <p className="pl-2">Gallery</p>{" "}
										</div>
										<div>{view == "gallery" && <IconCheck />}</div>
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<button
										onClick={() => setView("table")}
										className={classNames(
											active ? "bg-gray-100 text-gray-900" : "text-gray-700",
											"block px-4 py-2 text-sm flex items-center w-full justify-between"
										)}
									>
										<div className="flex justify-start">
											<IconList /> <p className="pl-2">Table</p>{" "}
										</div>
										<div>{view == "table" && <IconCheck />}</div>
									</button>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
};

export default MenuBar;
