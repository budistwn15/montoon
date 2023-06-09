import Authenticated from "@/Layouts/Authenticated/Authenticated.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Link} from "@inertiajs/react";

export default function Index({auth}){
    return (
        <Authenticated>
            <Link href={route('admin.dashboard.movie.create')}>
                <PrimaryButton type="button" className="w-40 mb-8 text-white">
                    Insert new movie
                </PrimaryButton>
            </Link>
        </Authenticated>
    )
}
