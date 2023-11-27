import profilePic from '../assets/20230803_010136.jpg'

export default function AboutPage() {
    return (
     <div style={{border: "1px solid pink", height: "70vh"}}>
<h2>
   About Me </h2>
   <div style={{display:"flex",}}>
   <img style={{width:"35%",}} src={profilePic}/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum recusandae tenetur veniam amet deleniti, dolorum est adipisci cupiditate corrupti maxime illo expedita harum porro, optio impedit quam nesciunt odio necessitatibus. Hic optio quod aliquam neque laboriosam nostrum harum, excepturi doloremque at, quaerat architecto autem reprehenderit. Rem, nam reiciendis officiis sapiente voluptatum minus reprehenderit, molestias ratione autem tempora numquam quos! Nemo nihil cum cupiditate quisquam perferendis consequatur, fuga dolorem aperiam quod nobis, iure animi quae nesciunt dignissimos minus! Sint itaque dolorum possimus quos illo temporibus, in adipisci voluptatem consequatur ut molestias tenetur aliquid consequuntur culpa quis blanditiis sunt nisi dolorem?</p>
</div>
     </div>
        );
    }
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short 
// bio about them