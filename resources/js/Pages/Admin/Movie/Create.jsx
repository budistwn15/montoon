import Authenticated from "@/Layouts/Authenticated/Authenticated.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { Head, Link } from '@inertiajs/react';
import { useForm } from 'laravel-precognition-react-inertia';
import InputError from '@/Components/InputError';
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import Checkbox from "@/Components/Checkbox.jsx";

export default function Create({auth}){

    const form = useForm('post', route('admin.dashboard.movie.store'),{
        name:"",
        category:"",
        video_url:"",
        thumbnail:"",
        rating:"",
        is_featured:"",
    });

    const submit = (e) => {
        e.preventDefault();

        form.submit({
            onSuccess: () => form.reset(),
        });
    };

    return (
       <>
           <Authenticated auth={auth}>
               <Head title="Create Movie"/>
               <form onSubmit={submit}>
                   <div className="mt-6">
                       <InputLabel htmlFor="name" value="Name"/>
                       <TextInput
                           id="name"
                           type="text"
                           name="name"
                           placeholder="Enter the name..."
                           value={form.data.name}
                           autoComplete={'name'}
                           isFocused={true}
                           handleChange={(e) => form.setData('name', e.target.value)}
                           variant="primary-outline"
                           required
                       />
                       <InputError message={form.errors.name} className="mt-2"/>
                   </div>
                   <div className='mt-6'>
                       <InputLabel htmlFor="category" value="Category"/>
                       <TextInput
                           id="category"
                           type="text"
                           name="category"
                           placeholder="Enter the category..."
                           value={form.data.category}
                           autoComplete={'category'}
                           handleChange={(e) => form.setData('category', e.target.value)}
                           variant="primary-outline"
                           required
                       />
                       <InputError message={form.errors.category} className="mt-2"/>
                   </div>
                   <div className='mt-6'>
                       <InputLabel htmlFor="video_url" value="Video URL"/>
                       <TextInput
                           id="video_url"
                           type="url"
                           name="video_url"
                           placeholder="Enter the video url..."
                           value={form.data.video_url}
                           autoComplete={'video_url'}
                           handleChange={(e) => form.setData('video_url', e.target.value)}
                           variant="primary-outline"
                           required
                       />
                       <InputError message={form.errors.video_url} className="mt-2"/>
                   </div>
                   <div className='mt-6'>
                       <InputLabel htmlFor="thumbnail" value="Thumbnail"/>
                       <TextInput
                           id="thumbnail"
                           type="file"
                           name="thumbnail"
                           placeholder="Enter the thumbnail..."
                           value={form.data.thumbnail}
                           autoComplete={'thumbnail'}
                           handleChange={(e) => form.setData('thumbnail', e.target.type === "file" ? e.target.files[0] : e.target.value)}
                           variant="primary-outline"
                           required
                       />
                       <InputError message={form.errors.thumbnail} className="mt-2"/>
                   </div>
                   <div className='mt-6'>
                       <InputLabel htmlFor="rating" value="Rating"/>
                       <TextInput
                           id="rating"
                           type="number"
                           name="rating"
                           placeholder="Enter the rating..."
                           value={form.data.rating}
                           autoComplete={'rating'}
                           handleChange={(e) => form.setData('rating', e.target.value)}
                           variant="primary-outline"
                           min={0}
                           required
                       />
                       <InputError message={form.errors.rating} className="mt-2"/>
                   </div>
                   <div className="mt-6 flex flex-row items-center">
                       <InputLabel htmlFor="is_featured" value="Is Featured" className="mr-3 mt-1"/>
                       <Checkbox
                            name="is_featured"
                            handleChange={(e) => form.setData('is_featured', e.target.checked)}
                       />
                   </div>
                   <div className="mt-6">
                       <PrimaryButton type="submit" disabled={form.processing}>
                       <span className="text-base font-semibold text-white">
                           Create
                       </span>
                       </PrimaryButton>
                   </div>
               </form>
           </Authenticated>
       </>
    );
}
