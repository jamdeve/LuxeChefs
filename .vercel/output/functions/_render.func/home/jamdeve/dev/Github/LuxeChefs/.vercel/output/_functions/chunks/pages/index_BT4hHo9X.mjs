import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_B6I_4nxW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://jamdeve.github.io/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/layouts/Layout.astro", void 0);

const Logo = new Proxy({"src":"/LuxeChefs/astro/LOGO.BAARfT2e.png","width":1090,"height":862,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/LOGO.png";
							}
							
							return target[name];
						}
					});

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  Logo.src.startsWith("/") ? Logo.src.slice(1) : Logo.src;
  return renderTemplate` ${maybeRenderHead()}<nav class="nav" id="nav" data-astro-cid-d6vcou2g> <div class="wrapper nav-wrapper" data-astro-cid-d6vcou2g> <img class="logo"${addAttribute(Logo.src, "src")} alt="Logo" data-astro-cid-d6vcou2g> <svg class="menu-mobile" id="menu-mobile" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;" data-astro-cid-d6vcou2g><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" data-astro-cid-d6vcou2g></path></svg> <div class="menu-mobile-modal disable" id="mobile-modal" data-astro-cid-d6vcou2g> <div class="menu-mobile-container" data-astro-cid-d6vcou2g> <ul class="mobile-list" data-astro-cid-d6vcou2g> <li class="mobile-list-item" data-astro-cid-d6vcou2g> <a class="mobile-item-link" href="#inicio" data-astro-cid-d6vcou2g>INICIO</a> </li> <li class="mobile-list-item" data-astro-cid-d6vcou2g> <a class="mobile-item-link" href="#somos" data-astro-cid-d6vcou2g>SOMOS</a> </li> <li class="mobile-list-item" data-astro-cid-d6vcou2g> <a class="mobile-item-link" href="#servicios" data-astro-cid-d6vcou2g>SERVICIOS</a> </li> <li class="mobile-list-item" data-astro-cid-d6vcou2g> <a class="mobile-item-link" href="#testimonios" data-astro-cid-d6vcou2g>TESTIMONIOS</a> </li> <li class="mobile-list-item" data-astro-cid-d6vcou2g> <a class="mobile-item-link" href="#contacto" data-astro-cid-d6vcou2g>CONTACTO</a> </li> <li class="mobile-list-item" data-astro-cid-d6vcou2g> <a class="mobile-item-link" href="#galeria" data-astro-cid-d6vcou2g>TRABAJA CON NOSOTROS</a> </li> <li class="mobile-list-item" data-astro-cid-d6vcou2g> <a class="mobile-item-link" href="#eventos" data-astro-cid-d6vcou2g>FyQ</a> </li> </ul> </div> </div> <ul class="list" data-astro-cid-d6vcou2g> <li class="list-item" data-astro-cid-d6vcou2g> <a class="item-link" href="#inicio" data-astro-cid-d6vcou2g>INICIO</a> </li> <li class="list-item" data-astro-cid-d6vcou2g> <a class="item-link" href="#somos" data-astro-cid-d6vcou2g>SOMOS</a> </li> <li class="list-item" data-astro-cid-d6vcou2g> <a class="item-link" href="#servicios" data-astro-cid-d6vcou2g>SERVICIOS</a> </li> <li class="list-item" data-astro-cid-d6vcou2g> <a class="item-link" href="#testimonios" data-astro-cid-d6vcou2g>TESTIMONIOS</a> </li> <li class="list-item" data-astro-cid-d6vcou2g> <a class="item-link" href="#contacto" data-astro-cid-d6vcou2g>CONTACTO</a> </li> <li class="list-item" data-astro-cid-d6vcou2g> <a class="item-link" href="#galeria" data-astro-cid-d6vcou2g>TRABAJA CON NOSOTROS</a> </li> <li class="list-item" data-astro-cid-d6vcou2g> <a class="item-link" href="#eventos" data-astro-cid-d6vcou2g>FyQ</a> </li> </ul> </div> </nav> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/components/nav.astro", void 0);

const Bg = new Proxy({"src":"/LuxeChefs/astro/heroImg.BiIDFg_K.jpeg","width":736,"height":552,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/heroImg.jpeg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  Logo.src.startsWith("/") ? Logo.src.slice(1) : Logo.src;
  Bg.src.startsWith("/") ? Bg.src.slice(1) : Bg.src;
  return renderTemplate`${maybeRenderHead()}<div class="hero" data-astro-cid-2wwzl3ii> <img class="background"${addAttribute(Bg.src, "src")} data-astro-cid-2wwzl3ii> <div class="wrapper hero-wrapper" data-astro-cid-2wwzl3ii> <div class="hero-content" data-astro-cid-2wwzl3ii> <h1 class="tittle" data-astro-cid-2wwzl3ii>
LUXE CHEFS
</h1> <h2 class="subtittle" data-astro-cid-2wwzl3ii>
“Tu Chef Personal en casa”
</h2> <img class="logo"${addAttribute(Logo.src, "src")}${addAttribute(200, "width")}${addAttribute(200, "height")} alt="Logo" data-astro-cid-2wwzl3ii> <div class="cta__container" data-astro-cid-2wwzl3ii> <a class="hero__cta" href="#contacto" data-astro-cid-2wwzl3ii>Contáctanos</a> </div> <div class="sarten-container" data-astro-cid-2wwzl3ii></div> </div> </div> </div> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/web/hero.astro", void 0);

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="servicios" id="servicios" data-astro-cid-ldihe4ij> <div class="wrapper servicios-wrapper" data-astro-cid-ldihe4ij> <div class="servicios-content" data-astro-cid-ldihe4ij> <h2 class="servicios-tittle" data-astro-cid-ldihe4ij>NUESTROS SERVICIOS</h2> <div class="servicios-container" data-astro-cid-ldihe4ij> <div class="servicios-container-list" data-astro-cid-ldihe4ij> <div class="servicios-container-tittle" data-astro-cid-ldihe4ij> <svg width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-astro-cid-ldihe4ij> <rect width="50" height="39" fill="url(#pattern0_7007_85)" data-astro-cid-ldihe4ij></rect> <defs data-astro-cid-ldihe4ij> <pattern id="pattern0_7007_85" patternContentUnits="objectBoundingBox" width="1" height="1" data-astro-cid-ldihe4ij> <use xlink:href="#image0_7007_85" transform="matrix(0.00866667 0 0 0.0111111 0.11 0)" data-astro-cid-ldihe4ij></use> </pattern> <image id="image0_7007_85" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmklEQVR4nO2cXahVRRTHf/em16xML6WSYA9GJCIYRFYvioIUqJfeAlP6oFBREwSJ8iN6ShIk1Egp6MFHH8wPbqnhowhmiFhqplk3zcKPRCzRbMuCdV7kzuy9z5k5e+bs+cF6udw981//PWfvNR/nQCKRSCQSiUQikUgkmmI08BbwBfA9cAH4F/gHGACOAFuB14GxzXVRb6YB/cB/QFYwbgE7gZlVi4+BJ4B9Jcw1hdykp6pOJlTeBm44MLkR0tabVScVEt3ABocG3xubgK6qkwyBTz2a3IjP62726gIm/Q58DMwGxgMPaDyuf1sPnC/QzhpqyvScqkJKufnAkAJtDQUWAH9Y2rsDvETNeBr402LKV8DIJtodBeyytPsb8CAdwnPAWuBr4CxwDbgNnAF2A8uA4xYztugLslnu0wmOqf3PgKV6M09r/X1N9fXrI2YqgTIcWAKcavGltUeNapUheqNb0XJKc7qfQOgDfnVQGVzWKbcrZEp+xYGuX4A5VMgw/RhmjmKpB43LHeqTMrSHNvMQsN9hElc8vaRE51WHOve182U6zLHJGbDRo95VjrXubdfI3lJAjCxfvgc8CzymwsYBPxj+X57zvujRafhNraWPAh8AL6imHtU4VTUfKZDfZjzTlyPgRM6L42fDdRN8C1dDHy74v3OBkzm5yqzUWwlnqy526DPRxmXDtdJ2aIzQ9W1Tvmf1MeqcJTkmF5lk3DJcH0yteg/dOWYvct1hl2UycqLASG5wydCGLBaFyoic3J1Pq013tUwxf9TQhmxdhYzt3fSMy47WGjr5rmQ72yI1Gt0cHky7lI/O6Dd0IuVQGWYN0sZAFTMuh/W4rM8444yhE6mTy7IY+EuvPwxMJg5Mj09ZAXTGdUMnUug3w1BdO46JcQYPZInVGbcNncTwkXdFj8ED8cYZponGo9SH0QYPpGR1xk+GToLdifDA8wYPpMZ2xg5DJyupD+8aPNjuspOVhk6OUQ+6LCuPTgfbJEczw1h52ZL/k647O2TZU2vmaEAsSBl6zpD7QR8dvmK5q99obdyJJd1+S959vp5TplEt8S3QS+fQCxyw5HvQ53m+KXri3naMa56jsxlVIdpfzTleJkeCJ/oWstAioBGyNvIGcYzaXmAMMAN437Ku04j/gdfaJfDDAmZneq4iNGTb7MuSX9vwtixahDV6d22iZI+xU85jyw76O1WJ7ss5diU3IjQaS7RlQt49L1YtfIx+FE0iQ2OgidNJjxAQsRi9qqTRwc0PXBjdjX+k9l0B/KiPvZuW3fkQB0pLQofrMau/NTZVcKimFkZ/Msh18pW4dlILoy8Ocp18x6Wd1MLoLIAkQ9BQiGR0DY3ubuKaNKJL0Er1kowuQSvVSzK6BK1UL8noSN8T3gghySwADd4JIcksAA3eyTo0gqNqQ7JkNJWblUY01RuZHh2EEcFRtSFZ3Y2OhWj0RyM0dv3RCI1dfzRCY9cfjdDY9UcjNHb9VZdhWd3LuyzyCI6qDcnqYnSRnxbOIgv5SeXgWBeAMZnj+IhAvyq2rkNG9nnNpU6/3pBIJBKJRCKRSCSoKXcBrLAOKEGppzMAAAAASUVORK5CYII=" data-astro-cid-ldihe4ij></image> </defs> </svg> <h3 data-astro-cid-ldihe4ij>CHEF PRIVADO</h3> </div> <ul class="servicios-list" data-astro-cid-ldihe4ij> <li data-astro-cid-ldihe4ij>Menús Personalizados</li> <li data-astro-cid-ldihe4ij>Selección y Compra de Ingredientes</li> <li data-astro-cid-ldihe4ij>Pago Mensual</li> <li data-astro-cid-ldihe4ij>Presentación y Servicio Impecable</li> <li data-astro-cid-ldihe4ij>Experiencia Culinaria Completa</li> </ul> </div> <p class="servicios-description" data-astro-cid-ldihe4ij>
Luxe Chefs ofrece un servicio exclusivo de Chef Privado en tu hogar, donde un chef profesional prepara menús personalizados con ingredientes frescos, realiza las compras necesarias y cuida de la presentación y el servicio. Con opción de pago mensual, disfruta de una experiencia culinaria de lujo sin preocupaciones.
</p> </div> </div> </div> </section> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/web/servicios.astro", void 0);

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="somos" id="somos" data-astro-cid-qy4lt7y5> <div class="wrapper somos-wrapper" data-astro-cid-qy4lt7y5> <div class="somos-content" data-astro-cid-qy4lt7y5> <article class="somos-article" data-astro-cid-qy4lt7y5> <h2 class="somos-tittle" data-astro-cid-qy4lt7y5>SOMOS LUXE CHEFS</h2> <p class="somos-description" data-astro-cid-qy4lt7y5>
¡Bienvenidos a Luxe Chefs!
</p> <p class="somos-description" data-astro-cid-qy4lt7y5>
En Luxe Chefs, nos enorgullece ofrecer un servicio de chefs privados de lujo diseñado exclusivamente para personas y familias que desean experimentar la excelencia culinaria sin tener que cocinar nunca más en la comodidad de su hogar.
</p> <p class="somos-description" data-astro-cid-qy4lt7y5>
Nuestro equipo de talentosos y apasionados chefs se especializa en crear experiencias gastronómicas inolvidables, satisfaciendo los paladares más exigentes y superando todas las expectativas.
</p> <p class="somos-description" data-astro-cid-qy4lt7y5>
Cada uno de nuestros chefs cuenta con un amplio conocimiento en técnicas culinarias innovadoras y una creatividad sin límites, lo que les permite diseñar menús personalizados que reflejan los gustos y preferencias individuales de nuestros clientes.
</p> </article> <img class="logo"${addAttribute(Logo.src, "src")} alt="" data-astro-cid-qy4lt7y5> </div> </div> </section> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/web/nosotros.astro", void 0);

const Star = new Proxy({"src":"/LuxeChefs/astro/Star.D6eVIpGw.svg","width":37,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/Star.svg";
							}
							
							return target[name];
						}
					});

const Profesionalidad = new Proxy({"src":"/LuxeChefs/astro/profesionalidad.BlNmotia.svg","width":90,"height":90,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/profesionalidad.svg";
							}
							
							return target[name];
						}
					});

const Comodidad = new Proxy({"src":"/LuxeChefs/astro/comodidad.9m8P3uLd.svg","width":90,"height":90,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/comodidad.svg";
							}
							
							return target[name];
						}
					});

const Altacocina = new Proxy({"src":"/LuxeChefs/astro/altacocina.BSIoaf4f.svg","width":90,"height":90,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/altacocina.svg";
							}
							
							return target[name];
						}
					});

const $$Ventajas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<section class="ventajas" id="ventajas" data-astro-cid-72tiazw4> <div class="wrapper ventajas-wrapper" data-astro-cid-72tiazw4> <div class="ventajas-content" data-astro-cid-72tiazw4> <div class="ventajas-tittle-container" data-astro-cid-72tiazw4> <img${addAttribute(Star.src, "src")} alt="" data-astro-cid-72tiazw4> <h2 class="ventajas-tittle" data-astro-cid-72tiazw4>¿POR QUÉ ELEGIRNOS?</h2> <img${addAttribute(Star.src, "src")} alt="" data-astro-cid-72tiazw4> </div> <ul class="ventajas-list" data-astro-cid-72tiazw4> <li class="ventajas-item" data-astro-cid-72tiazw4> <img class="ventajas-imagen"${addAttribute(Profesionalidad.src, "src")} alt="" data-astro-cid-72tiazw4> <h3 class="ventajas-nombre" data-astro-cid-72tiazw4>Profesionalidad</h3> <p class="ventajas-parrafo" data-astro-cid-72tiazw4>
Nuestros chefs, con formación en restaurantes galardonados con estrellas Michelin, demuestran un profesionalismo excepcional.
</p> </li> <li class="ventajas-item" data-astro-cid-72tiazw4> <img class="ventajas-imagen"${addAttribute(Comodidad.src, "src")} alt="" data-astro-cid-72tiazw4> <h3 class="ventajas-nombre" data-astro-cid-72tiazw4>Comodidad</h3> <p class="ventajas-parrafo" data-astro-cid-72tiazw4>
Nos encargamos de todo para que tú solo disfrutes. Desde la planificación del menú hasta la limpieza final, nuestro equipo se ocupa de cada detalle. Relájate y deja que nuestros chefs trabajen.
</p> </li> <li class="ventajas-item" data-astro-cid-72tiazw4> <img class="ventajas-imagen"${addAttribute(Altacocina.src, "src")} alt="" data-astro-cid-72tiazw4> <h3 class="ventajas-nombre" data-astro-cid-72tiazw4>Alta Cocina</h3> <p class="ventajas-parrafo" data-astro-cid-72tiazw4>
Nuestros chefs no solo crean menús exquisitos, sino que también se encargan personalmente de seleccionar y adquirir los ingredientes más frescos y de la más alta calidad. Con una dedicación inigualable a la alta cocina.
</p> </li> </ul> </div> </div> <div class="ventajas-numeros" data-astro-cid-72tiazw4> <div class="ventajas-numeros-item" data-astro-cid-72tiazw4> <span class="ventaja-nombre ventaja-nombre--chefs" data-astro-cid-72tiazw4>+500 CHEFS</span> <p class="ventaja-descripcion" data-astro-cid-72tiazw4>En Luxe Chefs contamos con una gran cantidad de chefs profesionales ubicados en distintas partes del mundo.</p> </div> <div class="ventajas-numeros-item" data-astro-cid-72tiazw4> <span class="ventaja-nombre ventaja-nombre--clientes" data-astro-cid-72tiazw4>+120 CLIENTES</span> <p class="ventaja-descripcion" data-astro-cid-72tiazw4>Debido a nuestro gran esfuerzo en satisfacer las necesidades de nuestros clientes, hemos podido llegar a la cifra de más de 120 clientes satisfechos.</p> </div> <div class="ventajas-numeros-item" data-astro-cid-72tiazw4> <span class="ventaja-nombre ventaja-nombre--ahorro" data-astro-cid-72tiazw4>+60h AHORRADAS</span> <p class="ventaja-descripcion" data-astro-cid-72tiazw4>Ya que nuestros chefs se encargarán de la cocina y de los ingredientes necesarios para cocinarle, usted ahorrará una gran cantidad de horas al mes.</p> </div> </div> </section> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/web/ventajas.astro", void 0);

const GarantiaImg = new Proxy({"src":"/LuxeChefs/astro/garantia.Bw8VQ7l8.svg","width":547,"height":622,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/garantia.svg";
							}
							
							return target[name];
						}
					});

const $$Garantia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="garantia" id="garantia" data-astro-cid-63dkm2he> <div class="wrapper somos-garantia" data-astro-cid-63dkm2he> <div class="garantia-content" data-astro-cid-63dkm2he> <img class="logo"${addAttribute(GarantiaImg.src, "src")} alt="" data-astro-cid-63dkm2he> <article class="garantia-article" data-astro-cid-63dkm2he> <h2 class="garantia-tittle" data-astro-cid-63dkm2he>-GARANTÍA DE BIENESTAR-</h2> <p class="garantia-description" data-astro-cid-63dkm2he>
Tenemos un sistema de trabajo al que le llamamos garantía de bienestar, este sistema fue diseñado y creado para tener al cliente siempre contento y satisfecho con el servicio.
</p> <p class="garantia-description" data-astro-cid-63dkm2he>
Este sistema consiste en lo siguiente: Al cliente se le mostrará el Chef seleccionado para cubrir su demanda, si el cliente está de acuerdo y le gusta el perfil del Chef será el seleccionado para el cliente. En caso que el cliente quisiera cambiar de Chef por alguna razón nosotros haríamos el mismo proceso con otro de nuestros Chefs de nuestro gran equipo, así hasta que el cliente encontrara el Chef ideal.
</p> <p class="garantia-description" data-astro-cid-63dkm2he>
Es muy poco común que el cliente quiera cambiar de Chef, ya que con el primer Chef seleccionado suelen estar muy contentos y satisfechos, pero nosotros siempre ofrecemos esta garantía de bienestar para que se sientan tranquilos, seguros y cómodos.
</p> </article> </div> </div> </section> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/web/garantia.astro", void 0);

const Test1 = new Proxy({"src":"/LuxeChefs/astro/testimonio1.ByKm_RJv.jpeg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/testimonio1.jpeg";
							}
							
							return target[name];
						}
					});

const Test2 = new Proxy({"src":"/LuxeChefs/astro/testimonio2.C_34oxWA.jpeg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/testimonio2.jpeg";
							}
							
							return target[name];
						}
					});

const Test3 = new Proxy({"src":"/LuxeChefs/astro/testimonio3.DDD3rsSZ.jpeg","width":1024,"height":1024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/jamdeve/dev/Github/LuxeChefs/src/assets/testimonio3.jpeg";
							}
							
							return target[name];
						}
					});

const $$Testimonios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="testimonios" id="testimonios" data-astro-cid-p3p4emnc> <div class="wrapper testimonios-wrapper" data-astro-cid-p3p4emnc> <div class="testimonios-content" data-astro-cid-p3p4emnc> <h2 class="testimonios-tittle" data-astro-cid-p3p4emnc>TESTIMONIOS</h2> <h2 class="testimonios-subtittle" data-astro-cid-p3p4emnc>"Lo que dicen nuestros clientes"</h2> <div class="testimonios-container" data-astro-cid-p3p4emnc> <div class="testimonios-item" data-astro-cid-p3p4emnc> <p class="comentario" data-astro-cid-p3p4emnc>
"Contratar un chef privado a través de esta agencia ha sido una experiencia increíble. Ahora disfrutamos de comidas deliciosas y personalizadas sin preocuparnos por cocinar. ¡Nos ha ahorrado tanto tiempo y esfuerzo!"
</p> <img class="avatar"${addAttribute(Test1.src, "src")} alt="" data-astro-cid-p3p4emnc> <span class="nombre" data-astro-cid-p3p4emnc>Julio Espinosa</span> <span class="descripcion" data-astro-cid-p3p4emnc>Emprendedor autónomo</span> </div> <div class="testimonios-item" data-astro-cid-p3p4emnc> <p class="comentario" data-astro-cid-p3p4emnc>
"Trabajando en desarrollo de software, el tiempo es oro. Gracias a nuestro chef privado, ahora disfrutamos de comidas deliciosas y bien preparadas sin sacrificar tiempo valioso. ¡Un servicio excepcional!"
</p> <img class="avatar"${addAttribute(Test2.src, "src")} alt="" data-astro-cid-p3p4emnc> <span class="nombre" data-astro-cid-p3p4emnc>Francesca Hermida</span> <span class="descripcion" data-astro-cid-p3p4emnc>Desarrolladora de Software</span> </div> <div class="testimonios-item" data-astro-cid-p3p4emnc> <p class="comentario" data-astro-cid-p3p4emnc>
"Como neuróloga con una agenda muy ocupada, contar con un chef privado ha sido una bendición. Ahora disfruto de comidas saludables y gourmet sin dedicar tiempo a la cocina. ¡Lo recomiendo totalmente!"
</p> <img class="avatar"${addAttribute(Test3.src, "src")} alt="" data-astro-cid-p3p4emnc> <span class="nombre" data-astro-cid-p3p4emnc>Natalia Hidalgo</span> <span class="descripcion" data-astro-cid-p3p4emnc>Neuróloga</span> </div> </div> </div> </div> </section> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/web/testimonios.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contacto" id="contacto" data-astro-cid-dciakht6> <div class="wrapper contacto-wrapper" data-astro-cid-dciakht6> <div class="contacto-content" data-astro-cid-dciakht6> <h2 class="contacto-tittle" data-astro-cid-dciakht6>CONTACTO</h2> <div class="redes" data-astro-cid-dciakht6> <div class="redes-item redes-telefono" data-astro-cid-dciakht6> <span class="strong" data-astro-cid-dciakht6>Teléfono:</span> <a class="redes-link" href="https://wa.me/34674245070" data-astro-cid-dciakht6>(+34) 674 245 070</a> </div> <div class="redes-item redes-email" data-astro-cid-dciakht6> <span class="strong" data-astro-cid-dciakht6>Email:</span> <a class="redes-link" href="mailto:luxechefs@gmail.com" data-astro-cid-dciakht6>luxechefs@gmail.com</a> </div> <div class="redes-item redes-instagram" data-astro-cid-dciakht6> <span class="strong" data-astro-cid-dciakht6>Instagram:</span> <a class="redes-link" target="_blank" href="https://www.instagram.com/luxechefs.es/" data-astro-cid-dciakht6>@luxechefs.es</a> </div> </div> <h2 class="contacto-subtittle" data-astro-cid-dciakht6>-PEDIR PRESUPUESTO-</h2> <form action="#" target="" method="get" name="formDatosPersonales" data-astro-cid-dciakht6> <label for="nombre" data-astro-cid-dciakht6>Nombre</label> <input type="text" name="nombre" id="nombre" placeholder="Marcos Serrano Rodriguez" data-astro-cid-dciakht6> <label for="email" data-astro-cid-dciakht6></label>Email
<input type="email" name="email" id="email" placeholder="example@gmail.com" required data-astro-cid-dciakht6> <label for="telefono" data-astro-cid-dciakht6>Teléfono</label> <input type="tel" name="telefono" id="telefono" placeholder="+34 276 728 929" data-astro-cid-dciakht6> <label for="mensaje" data-astro-cid-dciakht6>Mensaje</label> <textarea name="mensaje" id="mensaje" placeholder="Buenas Luxe Chefs..." maxlength="300" data-astro-cid-dciakht6></textarea> <input type="submit" name="enviar" value="enviar mensaje" data-astro-cid-dciakht6> </form> </div> </div> </section> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/web/contacto.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const logoSrc = Logo.src.startsWith("/") ? Logo.src.slice(1) : Logo.src;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" id="footer" data-astro-cid-k2f5zb5c> <img class="logo"${addAttribute(logoSrc, "src")} alt="" data-astro-cid-k2f5zb5c> <p data-astro-cid-k2f5zb5c>©2024 LUXE CHEFS - DISEÑO WEB JAMDEVE</p> </footer> `;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/components/footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Luxe Chefs." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="inicio"></div> ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Nosotros", $$Nosotros, {})} ${renderComponent($$result2, "Servicios", $$Servicios, {})} ${renderComponent($$result2, "Ventajas", $$Ventajas, {})} ${renderComponent($$result2, "Garantia", $$Garantia, {})} ${renderComponent($$result2, "Testimonios", $$Testimonios, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/jamdeve/dev/Github/LuxeChefs/src/pages/index.astro", void 0);

const $$file = "/home/jamdeve/dev/Github/LuxeChefs/src/pages/index.astro";
const $$url = "/LuxeChefs";

export { $$Index as default, $$file as file, $$url as url };
