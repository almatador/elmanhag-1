import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Auth';

const DashboardAD = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/authentication", { replace: true });
    // return <Navigate to="/authentication" replace />;
  }

  // Redirect to login page if user is not authenticated
  if (!auth.user) {
    return <Navigate to="/authentication" replace />;
  }

  return (
    <>
      <div>DashboardAD</div>
      <h1>Name: {auth.user.firstName} {auth.user.lastName}</h1>
      <h2>Phone: {auth.user.phone}</h2>
      <h3>Type: {auth.user.type}</h3>
      <Link to="/">BACK</Link>
      <br />
      <button type="button" onClick={handleLogout}>Logout</button>
      <br />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id qui ipsum tempore suscipit natus, adipisci inventore, laboriosam quae ab repellendus rem aliquid impedit minus perferendis molestias hic a fuga iste.
        Repellat, ullam quibusdam! Provident fugit voluptatem perspiciatis nulla, placeat nisi. Excepturi magni eos at sint in? Id quae doloremque fugiat atque repellat! Aliquid sint consequuntur adipisci earum reiciendis quod harum!
        Consectetur veniam et sit vel unde quaerat veritatis, laudantium omnis? Eos, inventore dolorum. Voluptate doloribus quas repudiandae, dolorem a doloremque quasi dolor quis tempora consectetur nam cupiditate nihil voluptatum fugiat?
        Vitae laudantium harum illum eius minus similique tenetur officiis? Ea, maiores eveniet accusantium vel quo ducimus assumenda perspiciatis harum ullam sequi facere, esse illo quis cumque quas dignissimos quae repellat?
        Reprehenderit nostrum, consequuntur ab odio quidem cupiditate, magnam labore sunt sit beatae numquam suscipit. Possimus dolore enim, quis voluptates minus aspernatur sunt quisquam quae a cum consequatur cupiditate, tempore itaque!
        Consequatur consequuntur dolorem et ipsam quibusdam! Quam neque facere perspiciatis, iure, vel odio veniam minima, iste at sit voluptatem aliquam aliquid eaque dolorem sapiente nobis minus impedit corrupti. Minus, ratione.
        Voluptatem tempore nulla beatae, exercitationem enim repellendus possimus nesciunt error voluptatum fugit non neque, doloremque voluptate quam! Distinctio sint adipisci voluptatem fugit atque non, eum placeat ratione magni, provident assumenda?
        Corporis nobis dicta nam architecto perspiciatis eius quas recusandae et placeat? Eum doloribus, nostrum quisquam corrupti alias expedita repellendus quidem mollitia enim hic tempore repellat omnis quam quas tempora dolor!
        Sint magni autem minus explicabo voluptatem sequi eos enim dolores accusantium odit asperiores sunt non atque, id ipsam! Dignissimos beatae amet itaque necessitatibus suscipit autem distinctio debitis est cumque? Quae!
        Suscipit fuga, eos quasi enim esse assumenda earum minima cum? Illum, facere vel ut totam iusto modi iste fugiat nobis, accusantium similique eaque at incidunt, itaque inventore! Saepe, perferendis quas.
        Eum neque tempore nihil, autem eos earum recusandae quae architecto cum quam. Esse fuga veritatis ducimus atque ipsam nam neque, sed qui, ut ullam voluptatibus consequuntur eum. Facere, nesciunt id?
        Dignissimos iure asperiores facilis quibusdam ipsum dolores dolorem quo itaque sequi ipsa, blanditiis voluptatum, explicabo minus. Esse numquam laudantium dicta, asperiores velit itaque qui dolor debitis id, repellat animi obcaecati!
        Saepe expedita dolorum non atque ullam dolorem? Magni temporibus a esse, consectetur maxime adipisci autem fugit sint et laboriosam vitae alias expedita obcaecati voluptatum. Modi beatae consequatur pariatur illo tenetur!
        Quam fugit atque molestias at asperiores facilis quidem enim animi dolorem vel, nostrum itaque porro nisi dignissimos eius consectetur possimus dolores quos. Quaerat asperiores tenetur aliquam repellendus aspernatur est nihil.
        Dolorem praesentium nemo laudantium voluptatum magni ad quibusdam voluptate fuga corporis optio. Voluptates beatae quas maxime molestiae sunt, necessitatibus ullam doloremque aperiam laudantium doloribus. Alias quod expedita iusto ipsam fuga!
        Ut dolorem dignissimos animi laborum eveniet reprehenderit numquam sint quae placeat, quam soluta nemo incidunt ullam minus nihil, modi sunt magnam quisquam alias beatae perferendis. Deleniti, animi. Repellat, fugit quisquam.
        Inventore eos necessitatibus veritatis repellat nulla, harum quo facilis, voluptatem quasi consequatur exercitationem, explicabo perspiciatis? Similique, rem fuga, maiores unde voluptatem sapiente, sunt harum asperiores tempora at assumenda sequi quo!
        Quam ullam tempora distinctio dolores eos at eveniet maiores sunt qui ratione, numquam velit quaerat consequuntur excepturi accusamus perferendis fuga sed repudiandae ad quia tenetur. Quia, a. Impedit, labore recusandae.
        Dicta reiciendis delectus adipisci ipsum et iure? Repellat nesciunt soluta sit illum totam nam vero, exercitationem dolor vitae qui saepe molestiae magni eum ratione officia veritatis harum magnam error nulla!
        Corrupti vero cumque unde neque voluptate assumenda natus repellat eveniet placeat commodi. Dolore laborum magni ipsum omnis aperiam fugit sit. Sunt at ipsa accusamus doloremque corporis velit voluptatum nihil facilis.
        Commodi voluptatibus doloremque delectus, quasi ipsa dignissimos corporis. Harum voluptatem sunt provident fugiat velit, minus nihil quas asperiores nobis iusto laudantium, perspiciatis sequi quos tenetur! Optio eaque reprehenderit aliquam nostrum?
        Exercitationem deserunt inventore quas ex fugit reprehenderit, suscipit atque animi quis. Porro, repellendus distinctio. Minus, cumque. Quam eius voluptatibus, odio enim assumenda perspiciatis. Aperiam laborum minima sit quisquam doloremque natus?
        Laboriosam, assumenda. Totam nesciunt inventore quos est non doloribus ratione esse. Suscipit modi velit officia! Quidem non eveniet magnam eligendi et tenetur mollitia, porro, rerum alias quod quae minus aspernatur?
        Excepturi officia vitae doloribus deleniti sint eius repudiandae unde pariatur a sapiente optio incidunt obcaecati magnam, veniam similique ipsa cum aspernatur eum, reiciendis iusto iure dicta. Dolorum corporis voluptatem ipsa.
        Quod magni accusamus voluptate quasi! Deleniti, voluptatibus? Consectetur explicabo voluptate, atque commodi accusantium delectus quia possimus rem quam ratione maxime natus molestiae excepturi modi dolores perspiciatis, blanditiis ipsam temporibus alias?
        Nam voluptatum magnam ullam illo obcaecati quaerat voluptatem placeat incidunt recusandae neque voluptates quibusdam blanditiis, sint debitis maiores a odio autem aliquid eum fugiat quasi dolores veritatis delectus nostrum. Explicabo?
        Unde aliquam eius quo provident incidunt facilis molestias placeat, ipsa alias voluptatibus impedit. Dolorem unde alias eum velit aut. Laudantium non repellat nobis libero voluptate nisi beatae nesciunt consequatur? Laboriosam!
        Deleniti alias cumque recusandae iste quod velit expedita dolorum nisi odio unde possimus iusto consequuntur tenetur, nostrum, similique dolore animi iure porro officia, dolores laboriosam temporibus? Corrupti accusamus explicabo dolorum.
        Placeat nesciunt perspiciatis rerum veniam maiores neque, sequi, odio sint est id reiciendis? Natus nobis magnam quas odio cumque illum fugiat molestiae blanditiis? Natus inventore similique accusantium numquam, nobis ducimus?
        Itaque beatae earum harum eius, ex accusantium. Nesciunt modi odio nulla esse ea? Non maxime nam, rem iure, vero et sequi earum ipsum nemo, laborum commodi amet quisquam quia culpa?
        Odit, dignissimos officia dolor quas deleniti, voluptatem repellendus rerum voluptatibus fugiat sunt sit laboriosam sequi amet pariatur expedita. Necessitatibus id ducimus ipsa recusandae neque dolores voluptatibus vitae quisquam totam animi?
        Doloribus illum saepe voluptatum minus dolor impedit tempore hic odit qui provident at amet delectus fugiat cumque culpa, quod ad est sit ratione iure repellat, animi blanditiis explicabo tenetur. Omnis!
        Possimus saepe suscipit dolore! Cumque, expedita adipisci molestiae debitis repudiandae facilis dolorem? In voluptatem voluptatum iste eius facilis ullam, cupiditate eligendi nesciunt debitis, corporis atque quia hic recusandae sapiente fuga!
        Nisi pariatur quisquam rem voluptate. Non pariatur qui autem quisquam laboriosam veritatis praesentium, excepturi sit molestiae doloremque, iusto ducimus voluptatibus iure nemo eaque. Eum, voluptas rerum magnam dignissimos at fugiat.
        Magnam ratione facilis eaque tempore molestiae alias quos rerum. Tenetur, repudiandae alias! Nemo voluptate nostrum repellat quod, dolore repudiandae quos provident ipsam! Vitae voluptas placeat facere quis suscipit et eos!
        In dolor consectetur maiores reiciendis, consequuntur asperiores. Quis atque repellat eum, molestiae molestias corporis at maiores totam labore aliquid modi vero placeat aut expedita possimus laboriosam, fuga alias! Ea, minima?
        Cumque, reprehenderit asperiores eos atque beatae ipsum, ab nesciunt delectus voluptates itaque minus nostrum earum eum ullam tempore nisi, temporibus placeat cum similique iure molestiae officiis non id. Facilis, veritatis!
        Ipsum quod recusandae vero natus adipisci amet quos beatae, itaque consequatur harum quae asperiores minima libero doloremque? Totam pariatur eius molestias inventore, dolorem minima, corporis voluptatum fugit eligendi temporibus nobis.
        Ipsum in, explicabo iste esse accusantium unde sequi, illo perferendis dolorum maxime harum non hic! Odit, perferendis. Repellendus veniam praesentium debitis. Quibusdam ea natus maxime et? Repellendus facere architecto numquam.
        Doloremque fugiat suscipit ullam deserunt velit temporibus? Cupiditate laboriosam asperiores saepe, voluptas eaque delectus magnam maxime officiis harum sed aliquid sint minus architecto obcaecati sit. Unde illo alias perferendis sapiente!
        Nemo officia labore a nihil, temporibus tempora quam ducimus, ex eaque facere praesentium, accusamus rem nostrum. Necessitatibus, perspiciatis! Minima perferendis aliquid asperiores esse non, temporibus assumenda debitis tempore unde ad.
        Reiciendis quia itaque aperiam porro minima quis id tempore enim praesentium sit dolor similique nulla velit quaerat repellat eveniet in nostrum at, dicta eos odio! Voluptatibus molestias rerum sit totam?
        Aperiam quasi ea minus sapiente natus labore quis aliquam? Voluptatum, quo accusantium pariatur libero reiciendis reprehenderit, ea maiores aperiam est quis fugit, ipsa sapiente eaque architecto sed sint culpa unde.
        Voluptatem excepturi totam enim cum sint, aut quod rem odio. Illum molestiae, omnis architecto dignissimos quam nostrum modi repellendus tempore suscipit ipsum cupiditate aspernatur ipsam adipisci, corporis quo deleniti ratione!
        Corrupti, excepturi quo consequatur repudiandae tempora exercitationem reprehenderit eum placeat sit, ut velit eligendi recusandae cum, voluptate omnis amet aspernatur aliquid nihil incidunt repellendus iste dolor aut inventore! Dolore, suscipit?
        Tenetur qui quo impedit animi illum aut soluta aperiam consequuntur vel deserunt numquam ea cumque laudantium magnam nostrum eveniet architecto dicta similique, ut voluptatem nulla ex quas? Accusantium, corporis quia?
        Eaque expedita nulla, asperiores optio natus velit corporis rerum ratione tempora repellat quibusdam voluptate temporibus eius quae praesentium nam molestiae, aliquid iusto deserunt laudantium! Autem suscipit nesciunt delectus perferendis aliquid?
        Expedita quod mollitia explicabo quia aliquam laborum ex voluptatem pariatur suscipit similique! Libero dolore perspiciatis ex sit quis qui. Totam architecto accusamus eaque et ipsum doloribus ipsa exercitationem, hic tempore?
        Quam molestiae aspernatur esse blanditiis est quidem in, labore hic laudantium enim eligendi nisi quisquam cupiditate consectetur sint, magni soluta accusantium, a dolorum sed? Tempore vitae nostrum doloremque optio dicta!
        Dicta, sit harum beatae consectetur nesciunt incidunt culpa repellat quisquam amet iste. Autem doloribus id asperiores ratione illum, sit hic? Nemo eos modi quidem, neque aut non vel assumenda repellendus.
        Quae vitae aspernatur, at facilis sunt molestiae maxime voluptatibus inventore fuga obcaecati. Sit blanditiis in facere, fugit saepe incidunt assumenda expedita ex, error voluptatibus, enim alias hic ipsum reiciendis! Quisquam.
        Ab voluptas alias, corporis placeat dolor, at eaque repellendus impedit recusandae eos in exercitationem error sequi nesciunt praesentium voluptates dolorum totam deserunt tempore vero? Blanditiis deleniti nisi aliquid veritatis aut?
        Excepturi numquam, beatae accusamus quo nesciunt magni facere adipisci at qui fuga iusto eligendi illo ad ducimus iste? Dolorem mollitia commodi totam. Expedita maiores, autem corporis perferendis quis aspernatur asperiores.
        Voluptate facere odio ratione suscipit distinctio nemo repellat enim iure illo excepturi. Architecto alias nemo aut sapiente a pariatur eum, recusandae maxime, tempore ut blanditiis vitae omnis quia eligendi eos.
        Tempora culpa totam tenetur sed enim libero possimus dolore perspiciatis blanditiis. Quibusdam repellendus rem doloremque ratione consectetur! Fuga natus modi quo. Deserunt mollitia repudiandae distinctio nisi neque aperiam illum maiores.
        Molestias officia dolor nemo autem earum fugit totam inventore eligendi incidunt beatae. Facilis facere, ex vel fuga magni veritatis enim assumenda accusantium ea esse exercitationem. Quasi ducimus aliquam impedit ipsum.
        Voluptate est corporis aperiam beatae accusamus asperiores dicta neque exercitationem, minus, quidem nesciunt non. Cumque ipsam illo maxime ut perspiciatis, ex tempora, laudantium iusto alias at culpa odit dolores laborum.
        Debitis nemo sint doloremque quaerat eveniet voluptate beatae dolores culpa adipisci praesentium nisi id impedit molestiae aliquam odit, quibusdam, veritatis architecto corrupti. Illo nam nobis blanditiis, accusantium tempora corporis est?
        Expedita nesciunt excepturi culpa praesentium dicta, laudantium incidunt id? Magni dolorum velit laudantium illum doloremque facere maiores, laboriosam quasi laborum. Rem officia quos harum cum aspernatur maiores amet dolore suscipit.
        Facilis blanditiis vero ipsam a voluptas, deleniti placeat nam dicta modi quae? Dolorem molestiae doloremque pariatur aliquam quas quasi incidunt veritatis! Nisi magnam ea iste tempora beatae expedita non tempore!
        Sequi cumque temporibus excepturi reprehenderit sed. Excepturi aut rerum error sed eum vero corporis sint iure incidunt accusamus, laborum ullam. Iure perspiciatis quo voluptatum similique, magni eos aut ipsa quaerat.
        Aliquid veritatis obcaecati architecto temporibus culpa nemo, vero numquam, neque quis tempore officia facilis non distinctio quo dolores commodi! Consequuntur cumque magni sunt unde aut suscipit laudantium id iste sit!
        Tempore, sapiente delectus! Ullam, nulla corrupti? Voluptatum laborum optio quisquam rerum accusamus officiis voluptas incidunt ea in! Fugiat commodi voluptas delectus voluptate nam, eum animi non voluptatum, quisquam eligendi ducimus?
        Quidem tempore earum magni, reprehenderit blanditiis laborum necessitatibus dignissimos voluptate nam dolore corporis officiis dolor similique veniam. Adipisci aperiam maxime dolorem explicabo, atque amet blanditiis, impedit voluptatibus delectus, vel ipsam.
        Nisi sunt velit id consectetur, unde reiciendis enim maiores fugiat ipsam. Repellendus possimus, dolores delectus corrupti deleniti minus incidunt voluptatem iure quis, corporis sit voluptatum in aperiam repudiandae quae mollitia.
        Nostrum, voluptates explicabo eos quos voluptatibus officiis beatae, dolorem, esse non aliquam porro nihil sint voluptatem ipsam dolores! Facere quod voluptatem sed voluptatibus fugit ea harum quas fugiat ad iusto.
        Praesentium dolorem veritatis numquam provident autem sequi vero non ab repellendus. Exercitationem dolor blanditiis numquam maxime, expedita omnis aut similique nihil minima aperiam sint labore corporis dolores deleniti! Repellat, maxime!
        Officiis fuga aspernatur ab ipsum odit odio, alias voluptatibus voluptas quos nihil omnis officia distinctio a blanditiis. Eum unde expedita, necessitatibus aperiam adipisci quidem nam cupiditate labore doloribus dolore incidunt.
        Voluptatum eum quam reiciendis odit facilis eaque neque quos. Consequuntur, ea dolore! Nihil rem, ipsam debitis unde ducimus placeat dolore totam ex distinctio adipisci deserunt ad natus voluptatum est vel.
        Culpa, dicta. Sint, tenetur voluptas? Accusantium distinctio nihil, tempora, maxime quae delectus quibusdam ab aliquid nam in eos inventore tempore? Perferendis illum corrupti debitis, vitae pariatur nisi saepe eum quia?
        Fugiat sed rem aperiam quisquam aut odio error! At aspernatur distinctio magni quidem excepturi tempore deleniti vitae exercitationem, consequatur, quibusdam nesciunt, doloribus suscipit pariatur sapiente possimus laboriosam reiciendis. Nihil, odio!
        Quo quisquam, numquam quas ipsa magni deserunt vitae corporis provident suscipit molestiae a placeat impedit autem quam modi temporibus labore iure, rerum dolores veniam distinctio ut eius. Ipsa, at nostrum.
        Aliquam molestiae sequi similique nihil saepe, ex tempore! Vitae itaque voluptatem ratione deleniti assumenda eius sunt, quisquam dolorem aliquam nesciunt nostrum quae quis tenetur, possimus quidem exercitationem, laboriosam cupiditate ipsa?
        Nam eligendi eum nulla iure odio error maxime dolores, aut a, consectetur, doloremque harum commodi iusto. Fugiat alias, saepe rerum iusto doloribus quasi et beatae, quo minima consequatur expedita eaque.
        Mollitia, accusantium. Ea dolore consequuntur dicta, nostrum laborum voluptatem praesentium eos velit odio possimus animi accusantium facere exercitationem recusandae repellendus inventore tenetur sint rem, fuga laudantium nulla delectus ipsam. Qui?
        Pariatur illo unde, blanditiis impedit distinctio, quaerat, nemo minus consectetur excepturi aliquid veritatis? Explicabo amet deleniti quo aspernatur laboriosam repudiandae reiciendis aliquid dignissimos sit quisquam, ullam libero facilis, eius expedita.
        Perferendis consectetur quis, impedit reprehenderit molestiae aut quasi asperiores. Voluptas corporis et vel, nam repellendus commodi ea magnam perspiciatis quod blanditiis assumenda laudantium tenetur modi nobis nulla. Cum, incidunt harum.
        Quisquam temporibus dolorem ea quis nemo! Maiores, minus architecto! Repudiandae laborum pariatur laudantium quisquam neque quod cumque culpa quae sed odio tempora adipisci soluta quaerat illo repellendus, aliquid illum fugit?
        Impedit ullam animi quos dolorem repellat doloribus distinctio laudantium! Sed corrupti distinctio excepturi. Doloremque neque, sed saepe delectus voluptates ab porro cumque natus sequi sunt iure molestiae a dolorem ducimus!
        Enim cupiditate, obcaecati magni quos hic illo natus aliquid, praesentium quas consectetur harum autem eos architecto eaque repudiandae culpa debitis odio, sunt possimus molestias officia! Ut numquam illo laborum eveniet.
        Delectus facere a qui sunt sed odit alias similique explicabo. Facere, deleniti. Rem, quae voluptas hic beatae placeat atque? Placeat doloremque nostrum sed iure et fuga mollitia nisi ut consectetur?
        Nostrum id eum libero. Dolore atque magnam commodi laborum sequi, repellendus ad hic officiis quisquam impedit! Adipisci tempora fuga enim praesentium omnis? Repellendus reiciendis explicabo, repellat impedit optio deleniti odit?
        Itaque, doloribus. Aperiam iure porro fugiat illum modi numquam, similique architecto in eos sunt corporis dignissimos facere, at eius earum. Est minus aliquid incidunt, nemo tempora itaque ipsum sequi aperiam.
        Sapiente esse sunt, voluptatibus ex nihil ducimus totam placeat repellendus cumque sint animi odio non distinctio harum minima eius odit incidunt! Sit corrupti cumque blanditiis unde quasi eligendi tempora amet!
        Accusamus, eum id inventore possimus magni cupiditate dolorem officia modi cumque nam culpa mollitia eos laboriosam rem ipsa quos magnam! Maxime, esse nihil eum omnis reiciendis itaque possimus iste illum.
        Necessitatibus, omnis velit! Voluptate, possimus, modi consectetur sunt quis harum illum voluptas corporis ut alias provident praesentium numquam natus? Repudiandae tempora ratione, rem sunt minima debitis odio? Sapiente, nesciunt nostrum.
        Quas quia vitae odit, corrupti libero adipisci perferendis ab atque expedita non distinctio error incidunt, quisquam quam! Nihil dolorem numquam assumenda unde, repudiandae nostrum expedita ipsa minima, beatae incidunt molestiae.
        Error accusantium ea est ut nesciunt possimus laudantium doloribus hic maxime, rem vero facere similique doloremque fugit unde impedit provident. Cum laborum maxime minima odit, consequatur nisi facilis animi nihil?
        Sit dolor illum corrupti, sapiente consectetur consequatur repellendus earum modi soluta odit culpa alias, enim aperiam consequuntur odio perferendis commodi? Facere aspernatur eum inventore cum, vitae repudiandae quos voluptatibus veniam.
        Ex voluptate aliquam tenetur porro quidem deleniti delectus a incidunt eum. Veniam praesentium nam vitae eligendi consectetur minima omnis, recusandae ipsum, asperiores repellendus est excepturi laborum similique nesciunt quo sapiente?
        Quos eveniet dolorem saepe, error eos minus beatae eius voluptatibus, dolorum odio, quis doloremque adipisci. Deleniti debitis temporibus laborum obcaecati illo placeat mollitia itaque excepturi! Inventore necessitatibus iste reprehenderit quae!
        Magni animi repellat incidunt quibusdam. Nihil sint ad pariatur maiores recusandae eligendi dolores atque, tempora accusamus neque iste ducimus perferendis optio dolore dolor officiis temporibus obcaecati? Deserunt praesentium quo unde.
        Doloremque autem porro dolores reprehenderit fugit natus laudantium excepturi deserunt consequuntur soluta, praesentium molestias, placeat voluptates quasi. At a ea in similique dignissimos libero voluptas impedit vel? Nisi, consequatur sunt?
        Eius, numquam voluptatum voluptate saepe molestiae exercitationem! Exercitationem quibusdam natus est tempora excepturi ducimus neque eveniet obcaecati accusantium quas. Itaque amet minus quaerat quos maxime blanditiis nemo esse rem aliquid.
        Suscipit repudiandae corrupti nulla doloremque praesentium neque? Labore sit dolores saepe optio voluptatum quas, numquam vero beatae quae aliquam necessitatibus asperiores corporis maiores recusandae? Dignissimos eaque optio tempora temporibus ipsam?
        Exercitationem, voluptatum! Alias, porro dolore. Reprehenderit debitis laboriosam, sit possimus est error beatae assumenda soluta! Quasi velit facilis minus eum neque impedit ea rem laboriosam, saepe, eligendi repellendus iure reprehenderit.
        Iusto, dolores debitis maiores ipsum hic officia aliquam eligendi laborum ut sed, quisquam inventore! Veniam nisi officia quibusdam? In, nostrum suscipit a repellendus commodi consectetur et laudantium tempora perspiciatis praesentium!
        Voluptatem eveniet aut iste suscipit, ut praesentium qui corporis, voluptate fuga sed tempora officiis ratione ipsum. Aperiam dignissimos ipsam illum aut doloribus velit quia placeat, nemo vel repellat nisi natus?
        Soluta consectetur ad velit earum fuga nostrum porro molestias recusandae corporis tenetur perspiciatis quaerat ipsa nisi quod necessitatibus voluptatum sint quam, adipisci blanditiis dolore illo! Iusto, nihil atque. Consequuntur, aperiam.
        Nostrum sint culpa excepturi, eveniet nesciunt illo aperiam delectus voluptas expedita doloremque ipsa suscipit consequuntur placeat possimus molestias temporibus veritatis? Reiciendis quasi deleniti corrupti non obcaecati nostrum perferendis sapiente dolorem!</p>
    </>
  );
}

export default DashboardAD;
